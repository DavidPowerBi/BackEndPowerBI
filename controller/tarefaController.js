// const sequelize = require('../db/db');
// const Tarefa = require('../model/tarefasModel');
// module.exports = class tarefaController{
//   //CREATE
//   static async TarefaCreate(req,res){
//     let os = req.body.os;
//     let setor = req.body.setor;
//     let periodo = req.body.periodo;
//     let equipamentos = req.body.equipamentos;
//     let estado = req.body.estado;
//     let tipoEquip = req.body.tipoEquip;

//     const query = `INSERT INTO os_preventivas (OS, SETOR, PERIODO, EQUIPAMENTOS, ESTADO, TIPO_EQUIP) VALUES (?,?,?,?,?,?)`;
//     const values = [os, setor, periodo, equipamentos, estado, tipoEquip];
//     try {
//       const [result] = await sequelize.query(query, {
//         replacements: values,
//         type: sequelize.QueryTypes.INSERT
//       });
//       res.json({message: "Tarefa cadastrada com sucesso!", result});
//     } catch(error){
//       console.error("Erro ao cadastrar a tarefa:", error);
//       res.status(500).json({error: "Erro ao cadastrar a tarefa"});
//     }
//   }
//   //READ - LISTAR
//   static async TarefaListar(req,res){
//     try {
//       const [results] = await sequelize.query('SELECT * FROM os_preventivas', {
//         type: sequelize.QueryTypes.SELECT
//       });
//       res.json(results);
//     } catch (error){
//       console.error("Erro ao listar tarefas:", error);
//       res.status(500).json({error: "Erro ao listar tarefas"});
//     }
//   }
//   //UPDATE
//   static async TarefaUpdate(req,res){
//     const id_tarefa = req.params.id;
//     let os = req.body.os;
//     let setor = req.body.setor;
//     let periodo = req.body.periodo;
//     let equipamentos = req.body.equipamentos;
//     let estado = req.body.estado;
//     let tipoEquip = req.body.tipoEquip;
//     const query = `UPDATE os_preventivas SET OS = ?, SETOR = ?, PERIODO = ?, EQUIPAMENTOS = ?, ESTADO = ?, TIPO_EQUIP = ? WHERE OS = ?`;
//     const values = [os, setor, periodo, equipamentos, estado, tipoEquip, id_tarefa];
//     try {
//       const [result] = await sequelize.query(query, {
//         replacements: values,
//         type: sequelize.QueryTypes.UPDATE
//       });
//       res.json({message: "Tarefa atualizada com sucesso!", result});
//     } catch (error) {
//       console.error("Erro ao atualizar a tarefa:", error);
//       res.status(500).json({error: "Erro ao atualizar a tarefa"});
//     }
//   }
//   //DELETE
//   static async TarefaDelete(req,res){
//     const id_tarefa = req.params.id;
//     const query = `DELETE FROM os_preventivas WHERE OS = ?`;
//     const values = [id_tarefa];

//     try {
//       const [result] = await Database.query(query, {
//         replacements: values,
//         type: Database.QueryTypes.DELETE
//       });
//       res.json({message: "Tarefa excluída com sucesso!", result});
//     } catch (error) {
//       console.error("Erro ao excluir a tarefa:", error);
//       res.status(500).json({error: "Erro ao excluir a tarefa"});
//     }
// }
// };

const Tarefa = require("../model/tarefasModel");

module.exports = class tarefaController {
  //CREATE
  static async TarefaCreate(req, res) {
    try {
      const newTarefa = await tarefa.create(req.body);
      res
        .statu(201)
        .json({
          message: "Tarefa criada com sucesso!",
          tarefa: newTarefa.toJSON(),
        });
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      res.status(500).json({ error: "Erro ao criar tarefa" });
    }
  }

  //READ
  static async TarefaListar(req, res) {
    try {
      const tarefas = await Tarefa.findAll();
      res.status(200).json(tarefas.map((t) => t.toJSON()));
    } catch (error) {
      console.error("Erro ao listar tarefas:", error);
      res.status(500).json({ error: "Erro ao listar tarefas" });
    }
  }

  //UPDATE
  static async TarefaUpdate(req, res) {
    const id = req.params.id;
    try {
      const [updatedCount, updatedTarefas] = await Tarefa.update(req.body, {
        where: { id: id },
      });
      if (updatedCount > 0) {
        res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
      } else {
        res.status(404).json({ message: "Tarefa não encontrada!" });
      }
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
  }

  //DELETE
  static async TarefaDelete(req, res) {
    const id = req.params.id;
    try {
      const deletedCount = await Tarefa.destroy({
        where: { id: id },
      });
      if (deletedCount > 0) {
        res.status(200).json({ message: "Tarefa excluída com sucesso!" });
      } else {
        res.status(404).json({ message: "Tarefa não encontrada!" });
      }
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      res.status(500).json({ error: "Erro ao excluir tarefa" });
    }
  }
};
