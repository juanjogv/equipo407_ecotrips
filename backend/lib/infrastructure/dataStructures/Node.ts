/**
 * @class Una Clase para crear un nodo doblemente ligado a partir de un dato proporcionado
 * @version 1.0
 * @author juanjogv
 */
export class Node<T> {
  public data: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;
  /**
   * Crea el nodo a partir del dato proporcionado
   * @constructor 
   * @param {T} data - es el dato que se desea almacenar en el nodo
   */
  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
