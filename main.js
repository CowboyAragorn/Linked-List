const Node = function (value = null, next = null) {
  this.value = value;
  this.nextNode = next;
};

const LinkedList = function () {
  this.head = null;

  //append(value) adds a new node containing value to the end of the list
  this.append = function (value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.nextNode != null) {
        tail = tail.nextNode;
      }
      tail.nextNode = newNode;
    }
  };
  //prepend(value) adds a new node containing value to the start of the list
  this.prepend = function (value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  };
  //size returns the total number of nodes in the list
  this.size = function () {
    let tail = this.head;
    let length = 0;
    if (this.head === null) {
      return length;
    }
    while (tail.nextNode != null) {
      tail = tail.nextNode;
      length++;
    }
    if (tail.value != null) {
      length++;
    }
    return length;
  };
  //head returns the first node in the list
  this.findHead = function () {
    return this.head;
  };
  //tail returns the last node in the list
  this.findTail = function () {
    let tail = this.head;
    while (tail.nextNode != null) {
      tail = tail.nextNode;
    }
    return tail;
  };
  //at(index) returns the node at the given index
  this.at = function (index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (
        currentNode === null ||
        (i < index && currentNode.nextNode === null)
      ) {
        return "no item at index";
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };
  //pop removes the last element from the list
  this.pop = function () {
    let tail = this.head;
    while (tail.nextNode.nextNode != null) {
      tail = tail.nextNode;
    }
    //if (tail.nextNode.nextNode === null) {
    tail.nextNode = null;
    //}
  };
  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  this.contains = function (v) {
    let tail = this.head;
    while (tail.nextNode != null) {
      if (v === tail.value) {
        return true;
      }
      tail = tail.nextNode;
    }
    //check for last node
    if (v === tail.value) {
      return true;
    }
    return false;
  };
  //find(value) returns the index of the node containing value, or null if not found.
  this.find = function (v) {
    let current = this.head;
    let incrementer = 0;
    while (current != null) {
      if (v === current.value) {
        return incrementer;
      }
      current = current.nextNode;
      incrementer++;
    }
    return null;
  };
  //toString represents your LinkedList objects as strings,
  //so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  this.toString = function () {
    let totalString = "";
    let currentString;
    let current = this.head;
    while (current.nextNode != null) {
      currentString = "(" + current.value + ") -> ";
      totalString = totalString + currentString;
      current = current.nextNode;
    }
    if (current.nextNode === null && current.value != null) {
      currentString = "(" + current.value + ") -> null ";
      totalString = totalString + currentString;
    }
    console.log(totalString);
  };

  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  //allows insertion at head, any index of linked list, and one after index of linked list//
  this.insertAt = function (v, index) {
    let current = this.head;
    let priorIndex = index - 1;
    let priorNode;
    //replace head
    if (index === 0) {
      const newNode = new Node(v, this.head);
      this.head = newNode;
      return;
    }

    for (let i = 0; i < index; i++) {
      if (i === priorIndex) {
        priorNode = current;
      }
      //appending at end of linkedList
      if (
        current.nextNode === null &&
        current.value != null &&
        index === i + 1
      ) {
        current.nextNode = new Node(v, null);
        return;
        //error message
      } else if (
        current.nextNode === null &&
        current.value != null &&
        index != i
      ) {
        return "sorry, linked list is not long enough to insert at that index, try running size method to determine length";
      }
      //increment loop
      current = current.nextNode;
    }
    //append at end of for loop
    priorNode.nextNode = new Node(v, current);
  };

  this.removeAt = function (index) {
    let current = this.head;
    let priorIndex = index - 1;
    let priorNode;
    let followingIndex = index + 1;
    let followingNode;
    //if removing head//
    if (index === 0) {
      let previousHead = current;
      current = current.nextNode;
      this.head = current;
      previousHead.nextNode = null;
      return;
    }

    for (let i = 0; i <= followingIndex; i++) {
      if (i === priorIndex) {
        priorNode = current;
      }
      if (i === followingIndex) {
        followingNode = current;
      }
      //remove at tail
      if (current.nextNode === null && index === i) {
        priorNode.nextNode = null;
        return;
        //if stated index is greater than linked list length
      } else if (current.nextNode === null && index > i) {
        return console.log("Index not present in linked list");
      }
      current = current.nextNode;
    }
    priorNode.nextNode = followingNode;
  };
};

//uncomment calls to see in console
const ll = new LinkedList();

ll.append(0);
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
//ll.prepend("9");
//ll.prepend("10");

console.log('show linked list')
console.log(ll);
ll.toString();
console.log('size of linked list')
console.log(ll.size());
console.log('Find head of linked list')
console.log(ll.findHead());
console.log('Find tail of linked list')
console.log(ll.findTail());
console.log('Pop last node off linked list')
ll.pop();
console.log('Show linked list, how long is it now?')
console.log(ll);
ll.toString();
console.log(ll.size());
console.log('Does the linked list contain the node value 3?')
console.log(ll.contains(3));
console.log('Does the linked list contain the node value 6?')
console.log(ll.contains(6))
console.log('Find the number 5')
console.log(ll.find(5));
console.log('print a string of the linked list')
ll.toString();
console.log('insert node value 10 at the fifth index')
console.log(ll.insertAt(10, 5));
ll.toString();
console.log('Remove the node at the third index')
ll.removeAt(3);
ll.toString();

