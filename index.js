class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}



 class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }


    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.current = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
    }

    moveNext() {
        if (this.current) {
            this.current = this.current.next || this.head; // wrap around
        }
    }

    
    movePrev() {
        if (this.current) {
            this.current = this.current.prev || this.tail;
        }
    }
  

    getCurrent() {
        return this.current ? this.current.value : null;
    }
 }

 const playlist = new DoublyLinkedList();
 playlist.append("Song A");
 playlist.append("Song B");
 playlist.append("Song C");
 playlist.append("Song D");

 let isPlaying = false

 const display = document.getElementById("display");
 const prevBtn = document.getElementById("prevBtn");
 const playBtn = document.getElementById("playBtn");
 const nextBtn = document.getElementById("nextBtn");


 function updateDisplay() {
    const song = playlist.getCurrent();
     if (isPlaying) {
        display.textContent = `Playing: ${song}`;
        playBtn.textContent = "Pause";
     } else {
        display.textContent = `Paused: ${song}`;
        playBtn.textContent = "play";
     }
 }
 

 updateDisplay();

 nextBtn.addEventListener("click", () => {
    playlist.moveNext();
    updateDisplay();
});

prevBtn.addEventListener("click", () => {
    playlist.movePrev();
    updateDisplay();
});


playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    updateDisplay();
});
