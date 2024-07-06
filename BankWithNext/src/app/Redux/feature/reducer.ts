import { createSlice , PayloadAction } from "@reduxjs/toolkit";


interface Card {
    id:string,
    name:string,
    number:string,
    cvv2:string,
    password:string,
    year:string,
    month:string,
    inventory:string
}

interface AddCard extends Omit<Card , 'cvv2'>{

    cvv:string
}

interface BankImg{
    ImgBank : string
    list:Card[],
    selectedCard:Card,
    AddCard:AddCard
    
}

const initialState :BankImg = {
    ImgBank: '',
    list : [],
    selectedCard:{
        id : '',
       name : '',
       number :'',
       cvv2 : '',
       password : '',
       year : '',
       month: '',
       inventory: ''

    },

    AddCard:{
        id : '',
       name : '',
       number :'',
       cvv : '',
       password : '',
       year : '',
       month: '',
       inventory: ''

    },

}


const Bank = createSlice({
    name : 'Bank',
    initialState,
    reducers:{
        setImageCart: (state , action:PayloadAction<string>)=> {
            state.ImgBank = action.payload
        },
        resetImageBank : (state ) => {
            state.ImgBank = ''
        },
        choseCard: (state , action:PayloadAction<{id:string}>) =>{
            const selectedCard = state.list.find(card => card.id === action.payload.id)
            if(selectedCard) {
                state.selectedCard ={
                    id : selectedCard.id,
                    name : selectedCard.name,
                   number : selectedCard.number,
                   cvv2 : selectedCard.cvv2,
                   password : selectedCard.password,
                   year : selectedCard.year,
                   month : selectedCard.month,
                   inventory : selectedCard.inventory,
                }
            }
        },

        Cardlist : (state , action:PayloadAction<Partial<AddCard>>) => {
            const newCard: Card = {
                id: (state.list.length + 1).toString(),
                name: action.payload.name || '',
                number: action.payload.number || '',
                cvv2: action.payload.cvv || '',
                password: action.payload.password || '',
                year: action.payload.year || '',
                month: action.payload.month || '',
                inventory: action.payload.inventory || ''
            };
            state.list.push(newCard);
            }
    }
})

export const {setImageCart , resetImageBank , choseCard , Cardlist} = Bank.actions
export default Bank.reducer