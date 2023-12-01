function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Get the ID of the drop target
    var dropTargetId = event.target.id;

    // Check if the item matches the correct bin
    if (
        (dropTargetId === "plastic-bin" && draggedElement.id === "bottle") ||
        (dropTargetId === "paper-bin" && draggedElement.id === "newspaper") ||
        (dropTargetId === "metal-bin" && draggedElement.id === "can")
    ) {
        alert("Correct! This item goes in the right bin.");
        // You can add more features like score tracking, animations, etc.
    } else {
        alert("Oops! Wrong bin. Try again!");
    }
}