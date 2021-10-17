"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./node");
/**
 * @class Crea una lista, la cual es un cconjunto de nodos doblemente ligados
 * @version 1.0
 * @author juanjogv
 */
class LinkedList {
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
  get gethead() {
    return this.head;
  }
  /**
   * Establece el nuevo valor de la cabeza
   * @param {Node} head - el nuevo valor de la cabeza
   */
  set sethead(head) {
    this.head = head;
  }
  /**
   * Agrega un dato al comienzo de la lista
   * @param {T} data - el dato que se desea agregar
   */
  addAtBegin(data) {
    const newNode = new Node_1.Node(data);
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
  addAtEnd(data) {
    const newNode = new Node_1.Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const getLast = (node) => {
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
  deleteNode(node) {
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
  traverse() {
    const array = [];
    if (!this.head) {
      return array;
    }
    const addToArray = (node) => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }
  /**
   * Imprime toda la lista
   * @returns {string} la lista
   */
  printList() {
    if (!this.size) return null;
    let current = this.head;
    let result = "";
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
  size() {
    return this.traverse().length;
  }
  /**
   *
   * @param {function} comparator
   * @returns {node}
   */
  search(comparator) {
    const checkNext = (node) => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };
    return this.head ? checkNext(this.head) : null;
  }
}
exports.LinkedList = LinkedList;
