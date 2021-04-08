import React, { useState, useEffect } from 'react';
import EditarTarefa from '../../components/editarTarefa'
import CadastrarTarefa from '../../components/cadastrarTarefa'
import ConcluirTarefa from '../../components/concluirTarefa'
import { deleteTarefa } from '~/store/modules/tarefas/actions';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api'
import { Container, Conteudo } from './styles'

export default function Header() {
  const [tarefas, setTarefas] = useState([])
  const [edittarefas, setEditTarefas] = useState([])
  const [habilitaEdit, setHabilitaEdit] = useState(false)
  const [habilitaCadastro, setHabilitaCadastro] = useState(false)
  const [habilitaConcluir, setHabilitaConcluir] = useState(false)
  const profile = useSelector(state => state.admin.profile)
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadTarefas() {
      const { data } = await api.get(`/tarefas/${profile.id}`)
      setTarefas(data)
    }
    loadTarefas()
  }, [])

  function handleSubmitCadastraTarefa() {
    setHabilitaCadastro(true)
  }
  function handleSubmitConcluiTarefa(data) {
    setEditTarefas(data)
    setHabilitaConcluir(true)
  }
  function handleSubmitUpdateTarefa(data) {
    setEditTarefas(data)
    setHabilitaEdit(true)
  }
  function handleSubmitDeleteTarefa(data) {
    dispatch(deleteTarefa(data));
  }
  

  return (

 !habilitaEdit && !habilitaCadastro && !habilitaConcluir ? 
<Container>
  
    <Conteudo><button onClick={() => handleSubmitCadastraTarefa()}>Cadastrar novas tarefas</button></Conteudo>
    <Conteudo>
    {tarefas.map((tarefa, index) => (
     
      <ul key={index}>
         <li>Tarefa: {tarefa.nome}</li>
         <li>Data da entrega da tarefa: {tarefa.dataEntrega}</li>
         <li>Data Conclusao da tarefa: {tarefa.dataConclusao}</li>
         <button onClick={() => handleSubmitDeleteTarefa(tarefa._id)}>Excluir tarefa</button>
         {!tarefa.dataConclusao ? 
         <button onClick={() => handleSubmitConcluiTarefa(tarefa)}>Concluir tarefa</button>
      : <button onClick={() => handleSubmitUpdateTarefa(tarefa)}>Editar tarefa</button>}
      </ul>
    
    ))}
   </Conteudo>   
</Container> 
   : habilitaCadastro ? <CadastrarTarefa> </CadastrarTarefa>
   : habilitaConcluir ? <ConcluirTarefa>{edittarefas}</ConcluirTarefa>
   : <EditarTarefa>{edittarefas }</EditarTarefa>
   
  );

}
