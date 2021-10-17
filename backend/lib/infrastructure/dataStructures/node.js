"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
/**
 * @class Una Clase para crear un nodo doblemente ligado a partir de un dato proporcionado
 * @version 1.0
 * @author juanjogv
 */
class Node {
    /**
     * Crea el nodo a partir del dato proporcionado
     * @constructor
     * @param {T} data - es el dato que se desea almacenar en el nodo
     */
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
exports.Node = Node;
