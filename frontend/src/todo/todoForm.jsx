import React, {Component} from 'react'
import Grid from '../template/grid'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import IconButton from '../template/iconButton'
import {add, changeDescription, search, clear} from './todoActions'

//transformar o componente funcional em classe para chamar o componentWillMount

class TodoForm extends Component {
	constructor(props){
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount() {
		this.props.search()
	}

	keyHandler (e) {
		//sintaxe do ES2015: extrair as funções add(), search() e o atributo description de this.props
		//só tem acesso a esses atributos se fizer o mapeamento lá embaixo
		const { add, search, description, clear } = this.props
		if (e.key === 'Enter') {
			e.shiftKey ? search() : add(description)
		} else if (e.key === 'Escape') {
			clear()
		}
	}

	//toda classe deve ter um metodo render
	render() {
		const { add, search, description, clear } = this.props

		return (
			<div>
				<div role="form" className="todoForm">
					<Grid cols="12 9 10">
						<input id="description" className="form-control" placeholder="Adicione uma tarefa"
							value={this.props.description} onKeyUp={this.keyHandler} onChange={this.props.changeDescription}></input>
					</Grid>
		
					<Grid cols="12 3 2">
						<IconButton style="primary" icon="plus" 
							onClick={() => add(description)}>
						</IconButton>
		
						<IconButton style="info" icon="search" 
							onClick={search}>
						</IconButton>
		
						<IconButton style="default" icon="close" 
							onClick={clear}>
						</IconButton>
					</Grid>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)