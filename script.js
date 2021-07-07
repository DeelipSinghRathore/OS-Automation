var robot = require("robotjs");
 
setTimeout(handleOpenBoard,2000);
// setTimeout(openTelegram,28000);

robot.setMouseDelay(200);

setTimeout(orderProductOnFlipkart,21000);

function orderProductOnFlipkart(){
    robot.moveMouseSmooth(138,841);
     robot.mouseClick();
     robot.typeString("Flipkart");
     robot.keyTap("enter");
     robot.moveMouseSmooth(1326,59);
     setTimeout(() => {
        robot.mouseClick();
     }, 2000);
     setTimeout(() => {
         robot.moveMouseSmooth(825,421);
        robot.mouseClick();
     }, 4000);
     setTimeout(() => {
         robot.moveMouseSmooth(321,355);
     }, 11000);
     setTimeout(() => {
        robot.mouseClick();
    }, 15000);

    setTimeout(() => {
         robot.moveMouseSmooth(865,648);
     robot.mouseClick();
     }, 18000);
     
     setTimeout(() => {
        robot.moveMouseSmooth(1525,253);
        robot.mouseToggle("down","left");
        robot.dragMouse(1525,865);
        robot.mouseToggle("up","left");
    }, 20000);

    setTimeout(() => {
        robot.moveMouseSmooth(182,609);
        robot.mouseClick();
    },30000);
   
     
    
}

function handleOpenBoard(){
     robot.moveMouseSmooth(138,841);
     robot.mouseClick();
     robot.typeString("Paint");
     robot.keyTap("enter");
     setTimeout(writeSomeThing,2000);
     setTimeout(closePaint,13000);
}

function openTelegram(){
    robot.moveMouseSmooth(138,841);
    robot.mouseClick();
    robot.typeString("Telegram");
    robot.keyTap("enter");
    setTimeout(writingPepCoding,5000);
}

function writingPepCoding(){

}

function closePaint(){
    robot.moveMouseSmooth(1521,12);
    robot.mouseClick();
    robot.moveMouseSmooth(792,422);
    robot.mouseClick();
}
function writeSomeThing(){
    robot.moveMouseSmooth(400,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(400,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(400,350);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,350);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(600,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(600,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,250);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(800,250);
    robot.mouseToggle("down","left");
    robot.dragMouse(800,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,450);
    robot.mouseToggle("down","left");
    robot.dragMouse(900,450);
    robot.mouseToggle("up","left");
}