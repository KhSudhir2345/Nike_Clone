import React from "react";
import { useParagraphRef,handleSize } from "./components/cartItems";
import { useState } from "react";
const Sizes = () => {
    const paragraphRef=useParagraphRef();
    const [selectedSize, setSelectedSize] = useState(null);
    const handleClick=(size) => {
        setSelectedSize(size===selectedSize ? null : size);
    }
    return(
        <div className="Sizes">
            <button className={`grid-cont ${selectedSize==='W 5/M 3.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 5/M 3.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 5/M 3.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 5.5/M 4' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 5.5/M 4');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 5.5/M 4</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 6/M 4.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 6/M 4.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 6/M 4.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 6.5/M 5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 6.5/M 5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 6.5/M 5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 7/M 5.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 7/M 5.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 7/M 5.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 7.5/M 6' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 7.5/M 6');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 7.5/M 6</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 8/M 6.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 8/M 6.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 8/M 6.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 8.5/M 7' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 8.5/M 7');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 8.5/M 7</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 9/M 7.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 9/M 7.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 9/M 7.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 9.5/M 8' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 9.5/M 8');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 9.5/M 8</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 10/M 8.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 10/M 8.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 10/M 8.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 10.5/M 9' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 10.5/M 9');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 10.5/M 9</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 11/M 4' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 11/M 4');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 11/M 9.5</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 11.5/M 10' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 11.5/M 10');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 11.5/M 10</p>
            </button>
            <button className={`grid-cont ${selectedSize==='W 12/M 10.5' ? 'highlighted' : ''}`} onClick={() => {
                handleSize(paragraphRef);
                handleClick('W 12/M 10.5');
            }}>
                <p style={{textAlign:'center'}} ref={paragraphRef}>W 12/M 10.5</p>
            </button>
        </div>
    )
}
export default Sizes;