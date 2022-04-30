import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MedicamentosList(props) {
    return(
        <div className="App de Medicamentos">
            <h4>Lista de Medicamentos</h4>

            <button onClick={props.onClickAtualizar} type="button" class="btn btn-info btn-sm">Atualizar</button>

            <button onClick={props.onClickInserir} type="button" class="btn btn-primary btn-sm">Inserir</button>



            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.medicamentos.length > 0 ? (props.medicamentos.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.id}</td>
                            <td>{o.tipo}</td>
                            <td>{o.nome}</td>
                            <td>{o.valor}</td>
                            <td>
                                <button onClick={() => props.editar(o.id)} class="btn btn-warning btn-sm">Alterar</button>
                                <button onClick={() => props.excluir(o.id)} class="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))): (
                        <tr>
                            <td colSpan={5}>Nenhum medicamento</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

}

export default MedicamentosList;