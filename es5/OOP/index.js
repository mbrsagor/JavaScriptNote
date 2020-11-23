const about_someone = {
    name: 'mbr-sagor',
    address: {
        locations: 'sector#11, road#19, house#94/96',
        phn_num: 1773474709,
        email: [
            {
                personal_mail: 'mbrsagor@gmail.com',
                office_mail: 'sagor@divine-it.net'
            }
        ]
    },

    about: function about_me(){
        let about_intro = "I am Md.Bozlur Rosid Sagor that's mean somebody knows me `mbr-sagor` \nand start up python and javascript developer. \nI believe that I am know nothing and try hard to be something";
        return about_intro;
    }
};

// console.log(about_someone, about_someone.about());

// Factory function
function createSomething(create){
    return {
        create,
        create_new: function new_user(){
            console.log('Here is new user!');
        }
    }
}

const something_instance = createSomething("1773474709");
// console.log(something_instance)


// Constructor
function SaySomething(something) {
    this.something = something;
    this.someone = function () {
        console.log("I am calling from function...");
    }
}

const say_something_instance = new SaySomething('I am a object:`Mbr-Sagor`');
// console.log(say_something_instance), say_something_instance.someone();


console.log(SaySomething.name);
