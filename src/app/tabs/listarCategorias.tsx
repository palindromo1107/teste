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
    nomeModal: {
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

const listarCategorias = () => {

    const [launched, setLaunched] = useState(false)
    const [formData, setFormData] = useState({
        id: 0,
        nome: "",
        descricao: ""
    })
    const [categorias, setcategorias] = useState([
        {
            id: 1,
            nome: "Ação",
            descricao: "Histórias com aventuras, conflitos e muita emoção"
        },
        {
            id: 2,
            nome: "Drama",
            descricao: "Narrativas focadas em conflitos emocionais e situações intensas"
        },
        {
            id: 3,
            nome: "Ficção Científica",
            descricao: "Histórias envolvendo ciência, tecnologia e futuros possíveis"
        },
        {
            id: 4,
            nome: "Fantasia",
            descricao: "Narrativas com magia, criaturas fantásticas e mundos imaginários"
        },
        {
            id: 5,
            nome: "Romance",
            descricao: "Histórias centradas em relacionamentos e sentimentos amorosos"
        },
        {
            id: 6,
            nome: "Infantil",
            descricao: "categorias destinados ao público infantil, com linguagem e histórias acessíveis"
        },
        {
            id: 7,
            nome: "Distopia",
            descricao: "Narrativas sobre sociedades imaginárias marcadas por opressão ou controle"
        },
        {
            id: 8,
            nome: "Clássico",
            descricao: "Obras reconhecidas por sua importância histórica e literária"
        },
        {
            id: 9,
            nome: "Aventura",
            descricao: "Histórias com exploração, desafios, descobertas e grandes jornadas"
        },
        {
            id: 10,
            nome: "Terror",
            descricao: "Narrativas criadas para provocar medo, suspense e tensão"
        }
    ])

    const handleShow = (event: any) => {
        setLaunched(true)
    }

    const handleSave = () => {

        if (formData.id === 0) {
            const novoId = categorias.length > 0
                ? Math.max(...categorias.map(categoria => categoria.id)) + 1
                : 1;

            const novocategoria = {
                id: novoId,
                nome: formData.nome,
                descricao: formData.descricao
            };
            setcategorias([...categorias, novocategoria]);

        } else {
            setcategorias(
                categorias.map(categoria =>
                    categoria.id === formData.id
                        ? {
                            ...categoria,
                            nome: formData.nome,
                            descricao: formData.descricao
                        }
                        : categoria
                )
            );
        }

        setFormData({
            id: 0,
            nome: "",
            descricao: ""
        });

        setLaunched(false);
    };

    const handleEdit = (data: any) => {
        setLaunched(true)
        setFormData({
            id: data.id,
            nome: data.nome,
            descricao: data.descricao
        })
    }

    const handleDelete = (data: any) => {
        setcategorias(categorias.filter((categoria) => categoria.id !== data.id))

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de categorias</Text>

            <Pressable onPress={handleShow}>Adicionar</Pressable>

            <Modal
                visible={launched}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setLaunched(false)}>
                <View style={styles.fundoModal}>
                    <View style={styles.meuModal}>
                        <Text style={styles.nomeModal}>
                            Cadastrar categoria
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={formData.nome}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    nome: value
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="descricao"
                            value={formData.descricao}
                            onChangeText={(value) =>
                                setFormData({
                                    ...formData,
                                    descricao: value
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

            <View style={styles.tabela}>
                <View style={styles.tabelaHead}>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>ID</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>NOME</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>DESCRIÇÃO</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>Editar</Text>
                    </View>
                    <View style={styles.celula}>
                        <Text style={styles.textoCabecalho}>Excluir</Text>
                    </View>
                </View>

                {categorias.map((categoria) => (
                    <View style={styles.linha} key={categoria.id}>
                        <View style={styles.celulaBody}>
                            <Text>{categoria.id}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Text>{categoria.nome}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Text>{categoria.descricao}</Text>
                        </View>
                        <View style={styles.celulaBody}>
                            <Button title="Editar" onPress={() => handleEdit(categoria)}></Button>
                        </View>
                        <View style={styles.celulaBody}>
                            <Button title="Excluir" onPress={() => handleDelete(categoria)}></Button>
                        </View>
                    </View>
                ))}
            </View>

        </View>
    )
};

export default listarCategorias;