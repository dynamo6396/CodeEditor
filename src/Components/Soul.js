import React from 'react'

function Soul(props) {  
  window.history.back();
const apikey=props.apikey;
const usercode=props.userCode;
// console.log(props.userCode);
// props.setuserCode("a");
// console.log(props.userCode);
// console.log(usercode);
const query=usercode.concat(props.convertor);
// console.log(query);
async function  fun (){
  // console.log("a");
  const url = 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '604c82a24amsh7af39ada67aaa79p12fd32jsn0e62a77ca3db',
      'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com',
    },
    body: JSON.stringify({
      query: query,
    }),
  };
  
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json(); // Parse response as JSON
      props.setdesiredoutput(result.response);
      // console.log(result.response);
      // Programmatically trigger the browser's back button
        props.setsoulresult(1);
        props.setloading(0)
    } else {
      props.setdesiredoutput(response.status);
      console.error(`Request failed with status: ${response.status}`);     
      props.setsoulresult(1);
      props.setloading(0)
    }
  } catch (error) {
    props.setsoulresult(1);
    props.setloading(0)
    props.setdesiredoutput(error);
    console.error(error);
  }
  
  // Programmatically triggering the browser's back button should be done at an appropriate location, not here.
  // window.history.back();
  
  // 'X-RapidAPI-Key':  '8ab8d4ee6fmshfb67d8f9da11a27p140f18jsna6d8d4fa3668',

}
fun();
  return (
    <div>

    </div>
  )
}

export default Soul;

  // const key='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';
  // const openai = new OpenAI({
  //   apiKey:props. key,dangerouslyAllowBrowser: true 
  // });
  // // new OpenAI({ myapikey, dangerouslyAllowBrowser: true });
  // async function main() {
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content: 'hay Chat gpt how are you' }],
  //     model: 'gpt-3.5-turbo',
  //   });
  
  //   console.log(chatCompletion.choices);
  // }
  
  // main();