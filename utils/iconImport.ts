const icons = import.meta.glob("../static/icons/*.svg", { eager: true });

const iconComponents = Object.keys(icons).reduce((acc, key) => {
    const iconName = key.split("/").pop()!.replace(".svg", "");
    acc[iconName] = icons[key].default.replace("/src/icons", "");
    return acc;
}, {});

export default iconComponents;
