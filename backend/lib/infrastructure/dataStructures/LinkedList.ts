import { Node } from "./Node";
import { ILinkedList } from "./ILinkedList";

/**
 * @class Crea una lista, la cual es un cconjunto de nodos doblemente ligados
 * @version 1.0
 * @author juanjogv
 */
export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null;

  /**
   * Crea la lista apartir de un nodo al cual se le denomina head
   * @constructor
   */
  constructor() {
    this.head = null;
  }

  /**
   * Obtiene el valor de head
   * @return {Node} el valor de head 
   */
  public get gethead(): Node<T> | null {
    return this.head;
  }
  
  /**
   * Establece el nuevo valor de la cabeza
   * @param {Node} head - el nuevo valor de la cabeza
   */
  public set sethead(head: Node<T>) {
    this.head = head;
  }

  /**
   * Agrega un dato al comienzo de la lista
   * @param {T} data - el dato que se desea agregar
   */
  public addAtBegin(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Agrega un dato al final de la lista
   * @param {T} data - el dato que se desea agregar
   */
  public addAtEnd(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      newNode.prev = lastNode;
      lastNode.next = newNode;
    }
  }

  /**
   * Elimina un nodo de la lista
   * @param {T} node - el nodo que se desea eiminar
   */
  public deleteNode(node: Node<T>): void {
    if (!node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }

/**
 * Convierte toda la lista en un array
 * @returns {T[]} la lista convertida
 */
  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }
    const addToArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }

  /**
   * Imprime toda la lista
   * @returns {string} la lista
   */
  public printList(): string | null {
    if (!this.size) return null;

    let current: Node<T> | null = this.head;
    let result: string = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "X";
    return result;
  }

  /**
   * Retorna el tamaño de la lista
   * @returns {number} el tamaño de la lista
   */
  public size(): number {
    return this.traverse().length;
  }

  /**
   * 
   * @param {function} comparator 
   * @returns {node}
   */
  public search(comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }
}
