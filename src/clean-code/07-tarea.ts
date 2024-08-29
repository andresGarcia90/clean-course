(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {}
  }


  interface InputEventsProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputEvents {
      public htmlElement: HtmlElement;
      public inputAttributes: InputAttributes;

      constructor( value: string, placeholder: string, id: string ) {

        this.htmlElement = new HtmlElement( id, 'input' );
        this.inputAttributes = new InputAttributes( value, placeholder );
      }

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})()