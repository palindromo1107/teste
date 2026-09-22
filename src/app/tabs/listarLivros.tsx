import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    tabela: {
        borderColor: '#556270',
        width: '95%',
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },

    tabelaHead: {
        flexDirection: 'row',
        backgroundColor: "#114d4d",
    },

    linha: {
        flexDirection: 'row',
        backgroundColor: '#ff0000',
    },

    celula: {
        flex: 1,
        minHeight: 45,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#adb5bd',
    },

    celulaBody: {
        backgroundColor: "#6e9987",
        flex: 1,
        minHeight: 45,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#bfedbe',
    },

    textoCabecalho: {
        fontWeight: 'bold',
        color: "#ffb43e",
        textAlign: 'center',
    },
    meuModal: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,

        elevation: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    meuModal2: {
        backgroundColor: '#88a19f',
        padding: 20,
        borderRadius: 12,
        width: '85%',
        alignSelf: 'center',

        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#f8f9fa',
    },
    fundoModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    tituloModal: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    botao: {
        flex: 1,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botaoCancelar: {
        backgroundColor: '#6c757d',
    },
    botaoSalvar: {
        backgroundColor: '#198754',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
import { router } from "expo-router";

const listarLivros = () => {

    const [launched, setLaunched] = useState(false)
    const [formData, setFormData] = useState({
        id: 0,
        titulo: "",
        autor: "",
        ano_publicacao: "",
        preco: "",
        categoria: ""
    })
    const [livros, setLivros] = useState([
        {
            id: 1,
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            ano_publicacao: "1899",
            preco: "29.90",
            categoria: "1"
        },
        {
            id: 2,
            titulo: "O Cortiço",
            autor: "Aluísio Azevedo",
            ano_publicacao: "1890",
            preco: "34.90",
            categoria: "1"
        },
        {
            id: 3,
            titulo: "1984",
            autor: "George Orwell",
            ano_publicacao: 1949,
            preco: 39.90,
            categoria: "2"
        },
        {
            id: 4,
            titulo: "O Hobbit",
            autor: "J. R. R. Tolkien",
            ano_publicacao: "1937",
            preco: "44.90",
            categoria: "3"
        },
        {
            id: 5,
            titulo: "Harry Potter e a Pedra Filosofal",
            autor: "J. K. Rowling",
            ano_publicacao: "1997",
            preco: "49.90",
            categoria: "3"
        },
        {
            id: 6,
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            ano_publicacao: "1943",
            preco: "24.90",
            categoria: "4"
        },
        {
            id: 7,
            titulo: "A Revolução dos Bichos",
            autor: "George Orwell",
            ano_publicacao: "1945",
            preco: "32.90",
            categoria: "2"
        },
        {
            id: 8,
            titulo: "Orgulho e Preconceito",
            autor: "Jane Austen",
            ano_publicacao: "1813",
            preco: "37.90",
            categoria: "5"
        },
        {
            id: 9,
            titulo: "O Senhor dos Anéis",
            autor: "J. R. R. Tolkien",
            ano_publicacao: "1954",
            preco: "59.90",
            categoria: "3"
        },
        {
            id: 11,
            titulo: "Memórias Póstumas de Brás Cubas",
            autor: "Machado de Assis",
            ano_publicacao: "1881",
            preco: "31.90",
            categoria: "1"
        }
    ])

    const handleShow = (event: any) => {
        setLaunched(true)
    }

    const handleSave = () => {

        if (formData.id === 0) {
            const novoId = livros.length > 0
                ? Math.max(...livros.map(livro => livro.id)) + 1
                : 1;

            const novoLivro = {
                id: novoId,
                titulo: formData.titulo,
                autor: formData.autor,
                ano_publicacao: Number(formData.ano_publicacao),
                preco: Number(formData.preco),
                categoria: formData.categoria
            };
            setLivros([...livros, novoLivro]);

        } else {
            setLivros(
                livros.map(livro =>
                    livro.id === formData.id
                        ? {
                            ...livro,
                            titulo: formData.titulo,
                            autor: formData.autor,
                            ano_publicacao: Number(formData.ano_publicacao),
                            preco: Number(formData.preco),
                            categoria: formData.categoria
                        }
                        : livro
                )
            );
        }

        setFormData({
            id: 0,
            titulo: "",
            autor: "",
            ano_publicacao: "",
            preco: "",
            categoria: ""
        });

        setLaunched(false);
    };

    const handleEdit = (data: any) => {
        setLaunched(true)
        setFormData({
            id: data.id,
            titulo: data.titulo,
            autor: data.autor,
            ano_publicacao: data.ano_publicacao,
            preco: data.preco,
            categoria: data.categoria
        })
    }

    const handleDelete = (data: any) => {
        setLivros(livros.filter((livro) => livro.id !== data.id))

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de livros</Text>

            <Button title="Adicionar" onPress={() => {
                router.push("/views/cadastrarLivro")
                console.log('foi');
            }}></Button>

            {/*
            <Modal
                visible={launched}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setLaunched(false)}>
                <View style={styles.fundoModal}>
                    <View style={styles.meuModal}>
                        <Text style={styles.tituloModal}>
                            Cadastrar Livro
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={formData.titulo}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    titulo: value
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Autor"
                            value={formData.autor}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    autor: value
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ano de publicação"
                            keyboardType="numeric"
                            value={formData.ano_publicacao}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    ano_publicacao: value
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Preço"
                            keyboardType="decimal-pad"
                            value={formData.preco}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    preco: value
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Categoria"
                            value={formData.categoria}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    categoria: value
                                })
                            }
                        />

                        <View style={styles.botoes}>
                            <Pressable
                                style={[styles.botao, styles.botaoCancelar]}
                                onPress={() => setLaunched(false)}
                            >
                                <Text style={styles.textoBotao}>
                                    Cancelar
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[styles.botao, styles.botaoSalvar]}
                                onPress={handleSave}
                            >
                                <Text style={styles.textoBotao}>
                                    Salvar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            */}

            <View style={styles.tabela}>
                <View style={styles.tabelaHead}>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>ID</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>TÍTULO</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>AUTOR</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>PREÇO</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>Editar</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>Excluir</Text>
                    </View>
                </View>

                {livros.map((livro) => (
                    <View style={styles.linha} key={livro.id}>
                        <View style={styles.celulaBody}>
                            <Text>{livro.id}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Text>{livro.titulo}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Text>{livro.autor}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Text>R$ {livro.preco}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Button title="Editar" onPress={() => handleEdit(livro)}></Button>
                        </View>
                        <View style={styles.celulaBody}>
                            <Button title="Excluir" onPress={() => handleDelete(livro)}></Button>
                        </View>
                    </View>
                ))}
            </View>

        </View>
    )
};

export default listarLivros;