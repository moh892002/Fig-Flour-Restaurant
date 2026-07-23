import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import VisibilityLoader from "./VisibilityLoader";

beforeEach(() => {
  let callbackRef = null;

  globalThis.IntersectionObserver = class {
    constructor(callback) {
      callbackRef = callback;
    }
    observe() {}
    disconnect() {
      callbackRef = null;
    }
    unobserve() {}
  };

  // Expose a helper that triggers the stored callback inside act()
  globalThis.__triggerIntersection = (isIntersecting) => {
    if (callbackRef) {
      act(() => {
        callbackRef([{ isIntersecting }]);
      });
    }
  };
});

afterEach(() => {
  delete globalThis.__triggerIntersection;
  vi.restoreAllMocks();
});

describe("VisibilityLoader", () => {
  it("renders the fallback when the element has not been intersected", () => {
    render(
      <VisibilityLoader fallback={<div data-testid="fallback">Loading...</div>}>
        <div data-testid="content">Heavy content</div>
      </VisibilityLoader>,
    );

    expect(screen.getByTestId("fallback")).toBeInTheDocument();
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("renders children when the element becomes intersecting", async () => {
    render(
      <VisibilityLoader fallback={<div data-testid="fallback">Loading...</div>}>
        <div data-testid="content">Heavy content</div>
      </VisibilityLoader>,
    );

    globalThis.__triggerIntersection(true);

    await waitFor(() => {
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("fallback")).not.toBeInTheDocument();
  });

  it("wraps children in Suspense when visible", async () => {
    const LazyComponent = () => <div data-testid="lazy">Lazy loaded</div>;

    render(
      <VisibilityLoader fallback={<div>Loading...</div>}>
        <LazyComponent />
      </VisibilityLoader>,
    );

    globalThis.__triggerIntersection(true);

    await waitFor(() => {
      expect(screen.getByTestId("lazy")).toBeInTheDocument();
    });
  });

  it("uses a default animated fallback when none is provided", () => {
    render(
      <VisibilityLoader>
        <div data-testid="content">Heavy content</div>
      </VisibilityLoader>,
    );

    const defaultFallback = document.querySelector(".animate-pulse");
    expect(defaultFallback).toBeInTheDocument();
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
  });

  it("only triggers once — subsequent visibility changes have no effect", async () => {
    render(
      <VisibilityLoader fallback={<div data-testid="fallback">Loading...</div>}>
        <div data-testid="content">Heavy content</div>
      </VisibilityLoader>,
    );

    globalThis.__triggerIntersection(true);

    await waitFor(() => {
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    // Try to hide it again (observer was disconnected after first trigger)
    globalThis.__triggerIntersection(false);

    // Content should still be visible
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
});
