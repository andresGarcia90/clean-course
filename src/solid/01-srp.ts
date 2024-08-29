(() => {

  interface Product { 
      id:   number;
      name: string;
  }


  class ProductService {

    public getProduct( id: number ) {
        console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    public saveProduct( product: Product ) {
        console.log('Guardando en base de datos', product );
    }

  }


  class Mailer {
    private masterEmail = 'mail@mail.com';

    public sendEmail(emailList: string[], template: 'toClients' | 'toAdmins') {
        if (emailList.length > 0 )
            console.log('Enviando correo a:', template );
    }
  }


  
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private mailer: Mailer;
    private productService: ProductService;

        constructor(mailer: Mailer, productService: ProductService ) {
            this.mailer = mailer;
            this.productService = productService;
        }
  
      loadProduct( id: number ) {
        this.productService.getProduct( id );
      }
  
      saveProduct( product: Product ) {
        this.productService.saveProduct( product );
      }
  
      notifyClients() {
          this.mailer.sendEmail( ['j1yJt@example.com'], 'toClients' );
          console.log('Enviando correo a los clientes');
      }
  
    //   onAddToCart( productId: number ) {
    //       // Agregar al carrito de compras
    //       console.log('Agregando al carrito ', productId );
    //   }
  
  }

  class CartBloc {

    public products: number[] = [];

    public onAddToCart( productId: number ) {
        this.products = [...this.products, productId];
        console.log('Agregando al carrito ', productId );
    }




  }

  
  const mailer = new Mailer();
  const productService = new ProductService();


  const productBloc = new ProductBloc(mailer, productService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);








})();