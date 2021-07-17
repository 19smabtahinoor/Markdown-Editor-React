import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const Markdown = () => {
    const [markDown, setMarkDown] = useState("### Let's Start 💥💥💥. Developed by [Abtahi Noor](https://github.com/19smabtahinoor)")

    return (
        <Wrapper>
            <main className="container">
                <div className="markdown__wrapper">
                    <h1 className="heading">Markdown Editor</h1>
                    <div className="markdown__container">

                        <div className="markdown__editor">
                            <textarea className="" value={markDown} onChange={(event) => setMarkDown(event.target.value)}></textarea>
                        </div>

                        <div className="markdown__previewer">
                            <ReactMarkdown>{markDown}</ReactMarkdown>
                        </div>
                    </div>
                    <h3 className="footer__text">Devleoped by ❤ <a href="https://github.com/19smabtahinoor">S.M.Abtahi Noor</a></h3>
                </div>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container{
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #4568DC; 
    background: -webkit-linear-gradient(to right, #B06AB3, #4568DC); 
    background: linear-gradient(to right, #B06AB3, #4568DC); 
    font-family:"system-ui";
}
.heading{
    text-align:center;
    color:white;
    font-size:30px;

}
.markdown__wrapper{
    width:870px;
    margin:auto;
}
.markdown__container{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap:10px;
    width:100%;
    height:70vh;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.0px );
    -webkit-backdrop-filter: blur( 12.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow:hidden;
}
.markdown__editor{
    width:100%;
    overflow:hidden;
    textarea{
        width:100%;
        resize: none;
        height:100%;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 12.0px );
        -webkit-backdrop-filter: blur( 12.0px );
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        outline:none;
        font-size:17px;
        overflow:auto;
        padding:15px ;
        box-sizing:border-box;
    }
}
.markdown__editor::-webkit-scrollbar{
    display:none;
}
.markdown__previewer{
    width:100%;
    overflow:auto;
    padding:15px ;
    box-sizing:border-box;
}
.markdown__previewer::-webkit-scrollbar{
    display:none;
}
.footer__text{
    text-align:center;
    font-size:15px;
    color:#000;
    a{
        color:#000;
    }
}
a{
    color:rgb(0, 109, 255);
}

`
export default Markdown
