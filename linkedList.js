var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
  return this;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let iterator = this.head;
  let iteration = 0;
  while (true) {
          if (iterator === null) {
      return -1;
    }
    if (iteration === index) {
      return iterator.value;
    }

    iterator = iterator.next;
    iteration++;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.length++;
  let newHead = {
    value: val,
    next: this.head,
  };
  this.head = newHead;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let iterator = this.head;
  if (iterator === null) {
    this.length++;
    return (this.head = {
      value: val,
      next: null,
    });
  }
  while (true) {
    if (iterator.next === null) {
      this.length++;
      return (iterator.next = {
        value: val,
        next: null,
      });
    }
    iterator = iterator.next;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let iterator = this.head;
  let iteration = 1;
  if (index === 0) {
    return this.addAtHead(val);
  }
  if (index === this.length) {
    return this.addAtTail(val);
  }
  while (true) {
    if (iterator === null) {
      return -1;
    }
    if (iteration === index) {
      iterator.next = { value: val, next: iterator.next };
      this.length++;
      break;
    }
    iterator = iterator.next;
    iteration++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let iterator = this.head;
  let iteration = 1;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  while (true) {
      if (iterator.next === null) {
      return -1;
    }
    if (iteration === index) {
      iterator.next = iterator.next.next;
      this.length--;
      return;
    }
    
    iterator = iterator.next;
    iteration++;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
