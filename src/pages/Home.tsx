import React, { useEffect, useState, Fragment } from 'react'
import Theme from '../styled-components/Theme'
import Limiter from '../components/Limiter'
import Button from '../components/Button'
import { QuestionaryStateService } from '../services/QuestionaryStateService'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'

function Home() {

  const questionaryStateService = new QuestionaryStateService()

  const [questionaryState, setQuestionaryState] = useState()

  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    handleGetQuestionary()
  }, [])
  
  function handleUpdateQuestionaryState() {
    setPageLoading(true)
    questionaryStateService.changeState()
      .then(response=>{
        setQuestionaryState(response.data)
        setPageLoading(false)
      })
  }

  function handleSendCertificate() {
    setPageLoading(true)
    questionaryStateService.changeState()
      .then(response=>{
        toast.success("Gratificação enviada com sucesso");
        setQuestionaryState(response.data)
        setPageLoading(false)
      })
  }

  function handleGetQuestionary() {
    questionaryStateService.getState()
    .then(response=>{
      setPageLoading(false)
      setQuestionaryState(response.data)
    })
  }

  return (
    <Theme>
      <div className='flex justify-center items-center'>
        <Limiter>
          <div className='min-h-screen flex-col gap-6 items-center text-white justify-center flex'>
            <div className='flex flex-col max-w-80 gap-3 p-6 border-white border-2 bg-gray-800 rounded-md '>
              {
                pageLoading?
                  <Loading visible={true} className="w-10 h-10 " />
                  :
                  <Fragment>
                    <p>
                      Estado:
                    </p>
                    <p className={ "p-2 rounded-md flex justify-center border-2 border-white " +( questionaryState?"bg-green-400":"bg-red-400")}>
                      {
                        questionaryState?"Ativo":"Inativo"
                      }
                    </p>
                    <Button submit={()=>handleUpdateQuestionaryState()} className="p-3 bg-orange-400 rounded-md border-2 border-white ">
                      {!questionaryState?"Ativar":"Desativar"}
                    </Button>
                    <p>A Gratificação só pode ser enviada quando o sistema estiver desativado.</p> 
                    <p>A Gratificação ira ser enviada aos 3 primeiros do ranking.</p> 
                    <Button submit={()=>handleSendCertificate()} disable={questionaryState} className={
                        questionaryState?
                        "p-3 bg-zinc-400 cursor-not-allowed rounded-md border-2 border-white"
                        :
                        "p-3 bg-orange-400 rounded-md border-2 border-white"
                    }>
                      Enviar Gratificação
                    </Button>
                  </Fragment>                
              }
            </div>
          </div>
        </Limiter>    
      </div>
    </Theme>
  )
}

export default Home