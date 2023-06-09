
const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
                    {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di stendere i panni',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received'
                                }
                            ],
                    },
                    {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                                },
                                {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'sent'
                                }
                            ],
                    },
                    {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '28/03/2020 10:10:40',
                                    message: 'La Marianna va in campagna',
                                    status: 'received'
                                },
                                {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent'
                                },
                                {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received'
                                }
                            ],
                    },
                    {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received'
                                }
                            ],
                    },  
                    {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ricordati di chiamare la nonna',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Va bene, stasera la sento',
                                    status: 'received'
                                }
                            ],
                    },
                    {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao Claudia, hai novità?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Non ancora',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'Nessuna nuova, buona nuova',
                                    status: 'sent'
                                }
                            ],
                    },
                    {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                    status: 'received'
                                }
                            ],
                    },
                    {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'OK!!',
                                    status: 'received'
                                }
                            ],
                    },

                    
                ],
        
                
 // inizializzo una proprietà per le date               
        newDate : '',
        
        
// creo array per risposte automatiche del bot       
        autoAnswers : [

            'Perfetto, ci penso io',
            'Tranquillo non preoccuparti',
            'OK!!',
            'Vado a dormire',
            'Ci vediamo domani!',
            'Non disturbarmi',
            'Lascia stare',
            'Questa vita mi distrugge'


                ],  
                
                
          
                
// inizializzo porprietà per mostrare chat attiva
        activeChat: 0,

//inizializzo proprietà per scroll automaticato del container
        chatContainer: null,

// creo nuovo messaggio vuoto                
        newMessage : 
                 {
                     date : '',
                     message : '',
                     status: 'sent'
                },


 // inizializzo proprietà per input                           
        searchValue: ''           
        }
    },



// chiamo una proprietà computed per modificare dinamicamente l'array "contacts" senza l'uso di nuovo array
    computed: {


// usersList sarà l'array da sostituire a contacts dentro l'html        
            usersList (){
            
// se la lunghezza del valore dell'input è maggiore di 0                
                if(this.searchValue.trim().length > 0){
                
//° i nomi dell'array contacts viene filtrato in base alle lettere incluse in searchValue                
                return this.usersList.filter((user) => user.name.toLowerCase().includes(this.searchValue.toLowerCase().trim()))       
                }
//° Altrimenti ritorna l'array con tutti i nomi                
                return this.contacts
                }
         },


    
    
    methods : {
    

        


            
    
        showActiveChat (chatIndex){
    
                this.activeChat = chatIndex
    
            },
        
        
 // creo una funzione che genera la data in tempo reale       
        createNewDate (){

                this.newDate = new Date();
                return this.newDate
             }, 
             
             


        createMessage (chatIndex){
           
            
            if (this.newMessage.message == ""){

            } else {
                
// il valore della proprietà date assume il valore della funzione createNewDate con formato che mi interessa utilizzare               
                this.newMessage.date =  this.createNewDate().toLocaleString('it-IT', {

                    hour : '2-digit',
                    minute : '2-digit',
                }) 
                
// creo variabile per lasciare vuoto tasto input allA pressione del tasto "ENTER"                
                let myMessage = this.newMessage
    
// pusho il messaggio nell chat indicata con l'indice                 
                this.usersList[chatIndex].messages.push(myMessage)




// creo una funzione con timer istantaneo in modo che la scrollbar si posizioni in basso al container delle chat appena viene appeso il nuovo messaggio
                setTimeout(() => {
                    this.chatContainer = this.$refs.container
                    this.chatContainer.scrollTop = this.chatContainer.scrollHeight
                }, 0)

                }
            },



            

// creo una funzione che elimina il messaggio selezionato
        deleteMessage(msgIndex){
            
            this.usersList[this.activeChat].messages.splice(msgIndex, 1 )
             
         },


        
// funzione scrolling con timeout uguale al timer della funzione "Automatic Message", in modo che la scroll sio posizioni subito in basso al container appena il bot appende il messaggio           
        scrolling(){
        
                setTimeout(() => {
        
        
                    this.chatContainer = this.$refs.container
                    this.chatContainer.scrollTop = this.chatContainer.scrollHeight
                }, 1000)
        
               },
                
    
// creo un numero random per l'indice delle risposte del bot
        generateRandomIndex (){
               
                    let random =  Math.floor(Math.random() * 8 + 1) - 1
                    return random
               
                       },
                
    
            
                       
        automaticMessage (chatIndex){
                           
                           
               
                if(this.newMessage.message == ""){
               
                } else {
               
 // pusho il messaggio del bot con una timing function con timer di 1000ms                   
                this.newMessage = setTimeout(() => {
                   
                    this.newMessage = {
                            date : this.createNewDate().toLocaleString('it-IT', {
                                hour : '2-digit',
                                minute : '2-digit',
                            }),
                            message: this.autoAnswers[this.generateRandomIndex()],
                            status: 'received'
                                    }
                   
                             this.usersList[chatIndex].messages.push(this.newMessage)
               
                             this.newMessage = {
                                 date : '10/01/2020',
                                 message: '',
                                 status: 'sent'
                                 }
             
                         }, 1000)
         
                     }
                     
         
                     
                 },
         
                 
             }, 
               
                                   
}).mount('#app')
                                    
                   

            
                                   
        

               
           

                              

                
          

         
        
                
                  



       


            
            
            

             
            

