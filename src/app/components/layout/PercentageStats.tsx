import ModalWindow from "./ModalWindow";
import React from "react";
import Heading from "../ui/typography/Heading";
import Button from "../ui/Button";

function GenOp(answer: string, percentage: number) {
    return (
    <>
        <div style={{marginTop: '20px', marginBottom: '10px'}}>{answer}</div>
        <div className="w-full flex flex-col justify-between" style={{height: '20px', width: percentage, backgroundColor: 'rgb(244,63,94)'}}></div>
        <div style={{marginTop: '5px'}}>{percentage}%</div>
    </>
    )
}

function GenSlider(answer: string, percentage: number) {
    return (
        <>
            <div style={{marginTop: '20px', marginBottom: '10px'}}>{answer}</div>
            <div className="w-full flex flex-col justify-between" style={{height: '20px', width: percentage, backgroundColor: 'rgb(244,63,94)'}}></div>
            <div style={{marginTop: '5px'}}>{percentage}%</div>
        </>
    )
}

function GenBase(answer: string, percentage: number) {
    return (
        <>
            <div style={{marginTop: '20px', marginBottom: '10px'}}>{answer}</div>
            <div className="w-full flex flex-col justify-between" style={{height: '20px', width: percentage, backgroundColor: 'rgb(244,63,94)'}}></div>
            <div style={{marginTop: '5px'}}>{percentage}%</div>
        </>
    )
}

function PercentageStats({
    onClose = () => {},
  }: {
    onClose?: () => void;
  }) {
    return (
      <ModalWindow onClose={onClose}>
        <div className="w-full flex flex-col justify-between" style={{height: '50vw'}}>
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center" style={{display: 'flex', flexDirection: 'column', height: '100%'
            }}>
                <div style={{width: '100%'}}>
                    <Heading>Poll Result</Heading>
                    {/* for create the bar chart*/}
                    {/* {
                        result.map((response) => (
                            GenBar(response.answer, response.percentage)
                        ))
                    } */}
                    <div style={{marginTop: '20px', marginBottom: '10px'}}>answer 1</div>
                    <div className="w-full flex flex-col justify-between" style={{height: '20px', width: '60%', backgroundColor: 'rgb(244,63,94)'}}></div>
                    <div style={{marginTop: '5px'}}>60%</div>

                    <div style={{marginTop: '20px', marginBottom: '10px'}}>answer 2</div>
                    <div className="w-full flex flex-col justify-between" style={{height: '20px', width: '40%', backgroundColor: 'rgb(244,63,94)'}}></div>
                    <div style={{marginTop: '5px'}}>40%</div>
                </div>

                <div className="w-full" style={{alignSelf: 'flexend'}}>
                    <Button size={"full"} onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </ModalWindow>
    )
  }

export default PercentageStats;