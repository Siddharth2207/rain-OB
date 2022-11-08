import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers'; 
import { useEffect , useState} from 'react';  
import { OrderBook  } from 'rain-sdk'; 
import { utils  } from 'rain-sdk';  
import abi from "./abi.json"
import tokenABI from "./tokenABI.json"




function App() {  


  useEffect(() => {   
     
    
  } , [])  

  const addOrder = async () => { 

    console.log("addOrder")    

    let max_uint256 = ethers.BigNumber.from(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );  
    let eighteenZeros = "000000000000000000"; 
    const max_uint32 = ethers.BigNumber.from("0xffffffff");
    let askPrice = ethers.BigNumber.from("90" + eighteenZeros);
    let aliceInputVault = ethers.BigNumber.from(1);
    let aliceOutputVault = ethers.BigNumber.from(2); 

    let provider = new ethers.providers.Web3Provider(window.ethereum)

    await provider.send("eth_requestAccounts", []);

    let signer = await provider.getSigner()   
    console.log("signer : " ,await  signer.getAddress() );     

    //let orderBookCtract = new OrderBook('0xb1AF299454849E40CE04E3521c8076010e1b7B63', signer)  

     let orderBookCtract = new ethers.Contract('0x75b4A6c9238A5206adBa189221B90ebbFe4ac248',abi , signer )
   
    console.log("orderBookCtract : " , orderBookCtract );
    
   
    const askConstants = [max_uint256, askPrice];
    const vAskOutputMax = utils.op(OrderBook.Opcodes.CONSTANT, 0); 
    const vAskPrice = utils.op(OrderBook.Opcodes.CONSTANT, 1);  

  
     let askSource = new Uint8Array([0,6,0,1,0,6,0,3]) 

     
      let askOrderConfig = { 
        interpreter: '0x19dd1aF639604544276353d14439eFC0AD3285E4',
        expressionDeployer: '0x84E24EA1c545927D1515CBbB2E567Efe5248c322',
        validInputs: [{ token: '0x3b55b7b2Eec07cf5F0634B130eFbb1A1e4eDEd0a', vaultId: aliceInputVault }],
        validOutputs: [{ token: '0x05cE0B29D94Cb8b156638D06336228b935212652', vaultId: aliceOutputVault }],
        interpreterStateConfig: {
          sources: [askSource],
          constants: askConstants,  
        }, 
        expiresAfter: max_uint32,
      }
    

  
    console.log("askOrderConfig")
    let  txAskOrderLive = await orderBookCtract.addOrder(askOrderConfig); 
    console.log("txAskOrderLive ")
    

   


  }  

  

  const deposit = async () => {   

    let max_uint256 = ethers.BigNumber.from(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );  
    let eighteenZeros = "000000000000000000"; 
    const max_uint32 = ethers.BigNumber.from("0xffffffff");
    let askPrice = ethers.BigNumber.from("90" + eighteenZeros);
    let aliceInputVault = ethers.BigNumber.from(1);
    let aliceOutputVault = ethers.BigNumber.from(2); 

    let provider = new ethers.providers.Web3Provider(window.ethereum)

    await provider.send("eth_requestAccounts", []);

    let signer = await provider.getSigner()   
    console.log("signer : " ,await  signer.getAddress() );     

    //let orderBookCtract = new OrderBook('0xb1AF299454849E40CE04E3521c8076010e1b7B63', signer)  

     let orderBookCtract = new ethers.Contract('0x75b4A6c9238A5206adBa189221B90ebbFe4ac248',abi , signer )   
     let tokenB = new ethers.Contract('0x05cE0B29D94Cb8b156638D06336228b935212652',tokenABI , signer )   


    console.log("orderBookCtract : " , orderBookCtract );




    const amountB = ethers.BigNumber.from("1000" + eighteenZeros);
    const depositConfigStructAlice = {
      token: '0x05cE0B29D94Cb8b156638D06336228b935212652' ,
      vaultId: aliceOutputVault,
      amount: amountB,
    };  

    let approveTx = await tokenB.approve('0x75b4A6c9238A5206adBa189221B90ebbFe4ac248', depositConfigStructAlice.amount);  
    await approveTx.wait()
    const txDepositOrderAlice = await orderBookCtract.deposit(depositConfigStructAlice); 
    await txDepositOrderAlice.wait()


    

  } 

  const BobTakesOrder = async () => {   

    let max_uint256 = ethers.BigNumber.from(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );  
    let eighteenZeros = "000000000000000000"; 
    const max_uint32 = ethers.BigNumber.from("0xffffffff");
    let askPrice = ethers.BigNumber.from("90" + eighteenZeros);
    let aliceInputVault = ethers.BigNumber.from(1);
    let aliceOutputVault = ethers.BigNumber.from(2); 

    let provider = new ethers.providers.Web3Provider(window.ethereum)

    await provider.send("eth_requestAccounts", []);

    let signer = await provider.getSigner()   
    console.log("signer : " ,await  signer.getAddress() );     

    //let orderBookCtract = new OrderBook('0xb1AF299454849E40CE04E3521c8076010e1b7B63', signer)  

     let orderBookCtract = new ethers.Contract('0x75b4A6c9238A5206adBa189221B90ebbFe4ac248',abi , signer )   
     let tokenB = new ethers.Contract('0x05cE0B29D94Cb8b156638D06336228b935212652',tokenABI , signer )   


    console.log("orderBookCtract : " , orderBookCtract );




    const amountB = ethers.BigNumber.from("1000" + eighteenZeros);
    const depositConfigStructAlice = {
      token: '0x05cE0B29D94Cb8b156638D06336228b935212652' ,
      vaultId: aliceOutputVault,
      amount: amountB,
    };  

    let approveTx = await tokenB.approve('0x75b4A6c9238A5206adBa189221B90ebbFe4ac248', depositConfigStructAlice.amount);  
    await approveTx.wait()
    const txDepositOrderAlice = await orderBookCtract.deposit(depositConfigStructAlice); 
    await txDepositOrderAlice.wait()


    

  }
  return (
    <div className="App">
      

      <button onClick={addOrder}>Add Order</button> 
      <button onClick={deposit} >Deposit Amount B</button>
    </div>
  );
}

export default App; 


// let askOrderConfig = {
    //   validInputs: [{
    //     token: '0x3b55b7b2Eec07cf5F0634B130eFbb1A1e4eDEd0a' ,
    //     vaultId: ethers.BigNumber.from(1) ,
    //   }],
    //   validOutputs: [{
    //     token : '0x05cE0B29D94Cb8b156638D06336228b935212652'  ,
    //     vaultId: ethers.BigNumber.from(2) ,
    //   }],
    //   vmStateConfig: {
    //     sources: [askSource],
    //     constants: askConstants,
    //   }
    // } 
