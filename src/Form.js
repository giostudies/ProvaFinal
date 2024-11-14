import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        endereco: '',
        bairro: '',
        cidade: '',
        pais: '',
        displayedName: '',
        displayedEndereco: '',
        displayedBairro: '',
        displayedCidade: '',
        displayedPais: ''
    }

    handleSubmitName = (e) => {
        e.preventDefault();
        this.setState({ displayedName: this.state.name });
    }

    handleSubmitEndereco = (e) => {
        e.preventDefault();
        this.setState({ displayedEndereco: this.state.endereco });
    }


    handleSubmitBairro = (e) => {
        e.preventDefault();
        this.setState({ displayedBairro: this.state.bairro });
    }


    handleSubmitCidade = (e) => {
        e.preventDefault();
        this.setState({ displayedCidade: this.state.cidade });
    }

    handleSubmitPais = (e) => {
        e.preventDefault();
        this.setState({ displayedPais: this.state.pais });
    }

    handleInputChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { name, endereco, bairro, cidade, pais, displayedName, displayedEndereco, displayedBairro, displayedCidade, displayedPais } = this.state;

        return (
            <section>
                <form onSubmit={this.handleSubmitName}>
                    <label>
                        Nome: 
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleInputChange}
                            placeholder='Nome'
                        />
                    </label>
                    <button type="submit">Enviar</button>
                    {displayedName && <h3>{`Nome: ${displayedName}`}</h3>}
                </form>

                <form onSubmit={this.handleSubmitEndereco}>
                    <label>
                        Endereço: 
                        <input
                            type='text'
                            name='endereco'
                            value={endereco}
                            onChange={this.handleInputChange}
                            placeholder='Endereço'
                        />
                    </label>
                    <button type="submit">Enviar</button>
                    {displayedEndereco && <h3>{`Endereço: ${displayedEndereco}`}</h3>}
                </form>


                <form onSubmit={this.handleSubmitBairro}>
                    <label>
                        Bairro: 
                        <input
                            type='text'
                            name='bairro'
                            value={bairro}
                            onChange={this.handleInputChange}
                            placeholder='Bairro'
                        />
                    </label>
                    <button type="submit">Enviar</button>
                    {displayedBairro && <h3>{`Bairro: ${displayedBairro}`}</h3>}
                </form>

                <form onSubmit={this.handleSubmitCidade}>
                    <label>
                        Cidade: 
                        <input
                            type='text'
                            name='cidade'
                            value={cidade}
                            onChange={this.handleInputChange}
                            placeholder='Cidade'
                        />
                    </label>
                    <button type="submit">Enviar</button>
                    {displayedCidade && <h3>{`Cidade: ${displayedCidade}`}</h3>}
                </form>

                <form onSubmit={this.handleSubmitPais}>
                    <label>
                        País: 
                        <input
                            type='text'
                            name='pais'
                            value={pais}
                            onChange={this.handleInputChange}
                            placeholder='País'
                        />
                    </label>
                    <button type="submit">Enviar</button>
                    {displayedPais && <h3>{`País: ${displayedPais}`}</h3>}
                </form>
            </section>
        );
    }
}

export default Form;
