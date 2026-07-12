function MenuCard({ image, name, description, price }) {
  return (
    <div className="menu-card bg-cream-dark rounded-2xl shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
      <img
        src={image}
        alt={name}
        className="menu-card-image w-full h-48 object-cover rounded-2xl"
        loading="lazy"
      />
      <div className="menu-card-content p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="menu-card-name text-dark text-lg">{name}</h3>
          <p className="menu-card-price text-brand-accent font-semibold mt-2">
            ${price}
          </p>
        </div>
        <p className="menu-card-description text-dark">{description}</p>
      </div>
    </div>
  );
}

export default MenuCard;
