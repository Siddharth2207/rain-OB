import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers'; 
import { useEffect , useState} from 'react';  
 import { OrderBook  } from 'rain-sdk'; 
 import { utils  } from 'rain-sdk'; 






function App() {  

  const [provider , setProvider] = useState() 
   const [orderBook , setOrderBook] = useState()  
  const [tokenA , setTokenA] = useState()  
  const [tokenB , setTokenB] = useState()  




  useEffect(() => {   

   


     _init()
    
  } , [])  

  

  async function _init(){  

    let providerObj = new ethers.providers.Web3Provider(window.ethereum)  
    setProvider(providerObj)  
    
    let signer = await providerObj.getSigner()

    let orderBookCtract = new OrderBook('0xb8BADe9783a815512A67B86e5fE967e9B861E102', signer)  
    
    setOrderBook(orderBookCtract)

    let tokenA = '0x05ce0b29d94cb8b156638d06336228b935212652'  
    let tokenAABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"}],"name":"addFreezable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freezables","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
   
    let tokenAContract = new ethers.Contract(tokenA ,tokenAABI , signer ) 
    setTokenA(tokenAContract) 


    let tokenB = '0x3b55b7b2eec07cf5f0634b130efbb1a1e4eded0a'  
    let tokenBABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"}],"name":"addFreezable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freezables","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
    let tokenBContract = new ethers.Contract(tokenB ,tokenBABI , signer ) 
    setTokenB(tokenBContract) 
  }


  const addOrder = async () => {
    console.log("addOrder")    

    let max_uint256 = ethers.BigNumber.from(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );  
    let eighteenZeros = "000000000000000000";
    let askPrice = ethers.BigNumber.from("90" + eighteenZeros);
    let aliceInputVault = ethers.BigNumber.from(1);
    let aliceOutputVault = ethers.BigNumber.from(2);

    let signer = await provider.getSigner()   
    console.log("signer : " , signer );

    let orderBookCtract = await OrderBook.get(signer); 

   
    console.log("orderBookCtract : " , orderBookCtract );
    
   
    const askConstants = [max_uint256, askPrice];
    const vAskOutputMax = utils.op(OrderBook.Opcodes.CONSTANT, 0); 
    const vAskPrice = utils.op(OrderBook.Opcodes.CONSTANT, 1);  

    
    // prettier-ignore
    const askSource = utils.concat([
      vAskOutputMax,
      vAskPrice,
    ]);

    let askOrderConfig  = {
      inputToken: '0x05ce0b29d94cb8b156638d06336228b935212652',
      inputVaultId: aliceInputVault,
      outputToken: '0x3b55b7b2eec07cf5f0634b130efbb1a1e4eded0a',
      outputVaultId: aliceOutputVault,
      tracking: "0x00",
      vmStateConfig: {
        sources: [askSource],
        constants: askConstants,
      },
    };
    console.log("askOrderConfig ")
    let  txAskOrderLive = await orderBookCtract.addOrder(askOrderConfig); 
    console.log("txAskOrderLive ")
    

   


  }  

  const deposit = async () => {  

    let max_uint256 = ethers.BigNumber.from(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );  
    let eighteenZeros = "000000000000000000";

    let askPrice = ethers.BigNumber.from("90" + eighteenZeros);

    let tokenA = '0x05ce0b29d94cb8b156638d06336228b935212652'  
    
    let tokenB = '0x3b55b7b2eec07cf5f0634b130efbb1a1e4eded0a' 

    let aliceInputVault = ethers.BigNumber.from(1);
    let aliceOutputVault = ethers.BigNumber.from(2); 

    let amountB = ethers.BigNumber.from("1000" + eighteenZeros); 

    const depositConfigStructAlice = {
      token: tokenB,
      vaultId: aliceOutputVault,
      amount: amountB,
    }; 
    
    // Deposit After approve .
    const txDepositOrderAlice = await orderBook.deposit(depositConfigStructAlice);


  } 

  const takeOrder = async () => { 

    

  }
  return (
    <div className="App">
      

      <button onClick={addOrder}>Add Order</button> 
      <button onClick={deposit} >Deposit</button>
    </div>
  );
}

export default App;
