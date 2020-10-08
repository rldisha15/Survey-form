class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Submit'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        this.reset = createButton('Reset');


        this.button.style('width','100px');
        this.button.style('height','40px');
        this.button.style('background','lavender');

        this.reset.style('width','100px');
        this.reset.style('height','40px');
        this.reset.style('background','lavender');

        //question 1
        this.question1 = createElement('h4', "Q1. DO YOU THINK WE NEED TO HAVE FREE MEALS FOR LUNCH?");
        this.radio = createRadio('h4');
        this.radio.option('YES');
        this.radio.option('NO');
        this.radio.style('width', '60px');

        //question 2
        this.question2 = createElement('h4', "Q2. SHOULD WE START A CLUB FOR INNOVATION?");
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width', '60px');

        //question 3
        this.question3 = createElement('h4', "Q3. HOW MUCH CAN YOU CONTRIBUTE FOR THE CLUB??");
        this.radio2 = createRadio('h5');
        this.radio2.option('100 to 300');
        this.radio2.option('300 to 600');
        this.radio2.option('600 to 900');
        this.radio2.option('900 & more');
        this.radio2.style('width', '121px');

        //question 4
        this.question4 = createElement('h4', "Q4. WHEN SHOULD THE CLUB FUNCTION??");
        this.radio3 = createRadio('h5');
        this.radio3.option('WEEKDAYS');
        this.radio3.option('WEEKENDS');
        this.radio3.option('EVERYDAY');
        this.radio3.style('width', '140px');

        this.description = createInput("Please add your comments here");
        this.description.style('width','420px');
        this.description.style('height','100px');

        this.desc= createElement('h4',"ADDITIONAL COMMENTS");

        

        
    }
    display(){
        this.title.html("STUDENT SURVEY FORM");
        this.title.position(displayWidth/2 + 50 ,20);
        this.name.html("Your Name");
        this.name.position(displayWidth/2 + 50 ,125);
        this.input.position(displayWidth/2 + 300 , 155);
        this.emailinput.html("Your Email");
        this.emailinput.position(displayWidth/2 + 50 ,200);
        this.email.position(displayWidth/2 + 300 ,225);
        this.button.position(displayWidth/2 + 150, displayHeight-80);
        this.reset.position(displayWidth/2 + 300, displayHeight-80);

        this.question1.position(displayWidth/2-100, 300);
        this.radio.position(displayWidth/2 +150, 360);
        
        this.question2.position(displayWidth/2-100, 400);
        this.radio1.position(displayWidth/2 +150, 460);

        this.question3.position(displayWidth/2-100, 500);
        this.radio2.position(displayWidth/2 +150, 560);

        this.question4.position(displayWidth/2-100, 640);
        this.radio3.position(displayWidth/2 +150, 700);

        this.desc.position(displayWidth/2-300,900);

        this.description.position(displayWidth/2 +30,900);
        this.description.style('color', 'rgb(237, 227, 227)');
        this.description.style('font-size', '20px');

       

        this.button.mousePressed(() => {
            this.greeting.show();
            this.description.hide();
            this.greeting.html("Thanks for your Submisssion!!");
            this.greeting.position(displayWidth/2-30,810);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '50px');
            this.greeting.style('background','lavender');
            this.greeting.style('padding','30px');
            //User.getCount();
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            User.radio3= this.radio3.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
            

            
        });
        this.reset.mousePressed(() => { 
          this.greeting.hide();
          this.description.show();
          this.input.value('');
          this.email.value('');
          this.radio.value();
          this.radio1.value();
          this.radio2.value();
          this.radio3.value();
        });    
    }
}