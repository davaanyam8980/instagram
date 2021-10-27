import styled from 'styled-components';
import React from 'react'
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const LoginInput = ({ type, Label }) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    const unWrite = () => {
        if (value === "")
            return (
                setValue(false)
            )
    }
    return (
        <InputContainer focus={focus} write={value}>
            <FormGroup className='form-group'>
                <div className='input-out-line'>
                    <span className='label'>{Label}</span>
                    <Input
                        className='form-control'
                        type={type}
                        onFocus={() => setFocus(true)}
                        onBlur={unWrite, () => setFocus(false)}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </FormGroup>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    .form-group{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .input-out-line{
            height: 36px;
            width: 300px;
            display: flex;
            margin-top: 10px;
            padding-left: 5px;
            border-radius: 3px;
            position: relative;
            flex-direction: column;
            transition: ease-in-out 0.3s;
            justify-content: ${({ write }) => write ? "end" : "center"};
            border: 1px solid ${({ focus }) => focus ? '#8a8a8a' : `rgba(var(--ca6, 219, 219, 219), 1)`};
            background-color: rgba(var(--b3f,250,250,250),1);
             .label{
                left: 7px;
                top: 7px;
                position: absolute;
                transition: ease-in-out 0.3s;
                color: rgba(var(--i1d,38,38,38),1);
                font-size: ${({ write }) => write ? 8 : 14}px;
            }
            .form-control{
                height: 25px;
                border: none;
                outline: none;
                transition: ease-in-out 0.2s;
                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                background-color: rgba(var(--b3f,250,250,250),1)    ;
            }
        }
       
`