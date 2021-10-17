import { Node } from "./Node";

export interface ILinkedList<T> {
  addAtBegin(data: T): void;
  addAtEnd(data: T): void;
  deleteNode(node: Node<T>): void;
  traverse(): T[];
  printList(): string | null;
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}
