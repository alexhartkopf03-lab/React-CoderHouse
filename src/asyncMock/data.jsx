const productos = [
  {
    id: 1,
    nombre: "Arroz Largo Fino 1kg",
    descripcion: "Arroz largo fino, ideal para comidas diarias.",
    stock: 120,
    precio: 1800,
    categoria: "almacen",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00571900/00571982.jpg"
  },
  {
    id: 2,
    nombre: "Fideos Spaghetti 500g",
    descripcion: "Fideos de trigo duro, cocción rápida.",
    stock: 85,
    precio: 1300,
    categoria: "almacen",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00573900/00573942.jpg"
  },
  {
    id: 3,
    nombre: "Aceite de Girasol 900ml",
    descripcion: "Aceite refinado de girasol para cocinar.",
    stock: 60,
    precio: 3200,
    categoria: "almacen",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00268100/00268144.jpg"
  },
  {
    id: 4,
    nombre: "Leche Entera 1L",
    descripcion: "Leche entera larga vida.",
    stock: 150,
    precio: 1400,
    categoria: "lacteos",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00079800/00079850.jpg"
  },
  {
    id: 5,
    nombre: "Yogur Bebible Frutilla",
    descripcion: "Yogur bebible sabor frutilla.",
    stock: 90,
    precio: 950,
    categoria: "lacteos",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00013900/00013921.jpg"
  },
  {
    id: 6,
    nombre: "Queso Cremoso 500g",
    descripcion: "Queso cremoso ideal para sandwiches y cocina.",
    stock: 40,
    precio: 4200,
    categoria: "lacteos",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00037600/00037672.jpg"
  },
  {
    id: 7,
    nombre: "Papa Negra 1kg",
    descripcion: "Papa fresca seleccionada.",
    stock: 200,
    precio: 1100,
    categoria: "verduleria",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00060900/00060947.jpg"
  },
  {
    id: 8,
    nombre: "Tomate Redondo 1kg",
    descripcion: "Tomate fresco ideal para ensaladas.",
    stock: 140,
    precio: 1600,
    categoria: "verduleria",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00000600/00000684.jpg"
  },
  {
    id: 9,
    nombre: "Banana 1kg",
    descripcion: "Bananas maduras y dulces.",
    stock: 100,
    precio: 1900,
    categoria: "verduleria",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00000400/00000446.jpg"
  },
  {
    id: 10,
    nombre: "Galletitas Dulces Chocolate",
    descripcion: "Galletitas dulces rellenas sabor chocolate.",
    stock: 70,
    precio: 1200,
    categoria: "ofertas",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00256900/00256999.jpg"
  },
  {
    id: 11,
    nombre: "Azúcar 1kg",
    descripcion: "Azúcar refinada de primera calidad.",
    stock: 110,
    precio: 1500,
    categoria: "ofertas",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00218800/00218834.jpg"
  },
  {
    id: 12,
    nombre: "Manteca 200g",
    descripcion: "Manteca láctea con sal.",
    stock: 55,
    precio: 2100,
    categoria: "ofertas",
    imagen: "https://static.cotodigital3.com.ar/sitios/fotos/large/00252800/00252822.jpg"
  }
];

let error = false;
export const fetchProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!error) {
            resolve(productos);
        } else {
            reject("Error: No se pudieron cargar los productos.");
        }
    }, 2000);
  });
}

export const fetchUnProducto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!error) {
          let busqueda = productos.find((prod)=>prod.id === id)
            resolve(busqueda);
        } else {
            reject("Error: No se pudo cargar el producto.");
        }
    }, 2000);
  });
}