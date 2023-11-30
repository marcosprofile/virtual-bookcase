// Books
import Book_1 from '../assets/novembro_9.png';
import Book_2 from '../assets/todas_as_suas_imperfeicoes.png';
import Book_3 from '../assets/e_assim_que_acaba.png';
import Book_4 from '../assets/e_assim_que_comeca.png';
import Book_5 from '../assets/o_lado_feio_do_amor.png';
import Book_6 from '../assets/verity.png';
import Book_7 from '../assets/ate_o_verao_terminar.png';
import Book_8 from '../assets/tarde_demais.png';
import Book_9 from '../assets/uma_segunda_chance.png';
import Book_10 from '../assets/um_caso_perdido.png';
import Book_11 from '../assets/sem_esperanca.png';
import Book_12 from '../assets/em_busca_de_cinderela.png';
import Book_13 from '../assets/as_mil_partes_do_meu_coracao.png';
import Book_14 from '../assets/a_razao_do_amor.png';
import Book_15 from '../assets/a_hipotese_do_amor.png';
import Book_16 from '../assets/amor_teoricamente.png';
import Book_17 from '../assets/o_duque_e_eu.png';
import Book_18 from '../assets/o_visconde_que_me_amava.png';
import Book_19 from '../assets/um_perfeito_cavalheiro.png';
import Book_20 from '../assets/os_segredos_de_colin_bridgerton.png';
import Book_21 from '../assets/para_sir_phillip.png';
import Book_22 from '../assets/o_conde_enfeiticado.png';
import Book_23 from '../assets/o_beijo_inesquecivel.png';
import Book_24 from '../assets/a_caminho_do_altar.png';
import Book_25 from '../assets/e_viveram_felizes_para_sempre.png';
import Book_26 from '../assets/cronicas_da_sociedade_de_lady_whistledown.png';
import Book_27 from '../assets/fallen.png';
import Book_28 from '../assets/tormenta.png';
import Book_29 from '../assets/paixao.png';
import Book_30 from '../assets/extase.png';
import Book_31 from '../assets/como_sobreviver_a_realeza.png';
import Book_32 from '../assets/sua_alteza_real.png';
import Book_33 from '../assets/eu_e_esse_meu_coracao.png';
import Book_34 from '../assets/antes_que_as_luzes_se_apaguem.png';
import Book_35 from '../assets/imperfeitos.png';
import Book_36 from '../assets/a_biblioteca_da_meia_noite.png';
import Book_37 from '../assets/todo_esse_tempo.png';
import Book_38 from '../assets/amendoas.png';
import Book_39 from '../assets/uma_tempestade_de_verao.png';
import Book_40 from '../assets/uma_farsa_de_amor.png';
import Book_41 from '../assets/amores_verdadeiros.png';
import Book_42 from '../assets/teto_para_dois.png';
import Book_43 from '../assets/pessoas_normais.png';
import Book_44 from '../assets/voce_ligou_para_o_sam.png';
import Book_45 from '../assets/o_morro_dos_ventos_uivantes.png';
import Book_46 from '../assets/o_clube_do_livro_dos_homens.png';
import Book_47 from '../assets/o_pequeno_principe.png';
import Book_48 from '../assets/nos_estivemos_aqui.png';

// Status
import NaoLido from '../assets/status/nao_lido.png';
import Lendo from '../assets/status/lendo.png';
import Lido from '../assets/status/lido.png';

function Capa(param) {
  const Books = [
    Book_1,
    Book_2,
    Book_3,
    Book_4,
    Book_5,
    Book_6,
    Book_7,
    Book_8,
    Book_9,
    Book_10,
    Book_11,
    Book_12,
    Book_13,
    Book_14,
    Book_15,
    Book_16,
    Book_17,
    Book_18,
    Book_19,
    Book_20,
    Book_21,
    Book_22,
    Book_23,
    Book_24,
    Book_25,
    Book_26,
    Book_27,
    Book_28,
    Book_29,
    Book_30,
    Book_31,
    Book_32,
    Book_33,
    Book_34,
    Book_35,
    Book_36,
    Book_37,
    Book_38,
    Book_39,
    Book_40,
    Book_41,
    Book_42,
    Book_43,
    Book_44,
    Book_45,
    Book_46,
    Book_47,
    Book_48,
  ]

  return Books[param]
}


export const booksDetails = [
  {
    id: 0,
    book_name: 'Novembro 9',
    book_autor: 'Colleen Hoover',
    book_pages: '352 páginas',
    book_status: NaoLido,
    book_img: Capa(0)
  },
  {
    id: 1,
    book_name: 'Todas as suas imperfeições',
    book_autor: 'Colleen Hoover',
    book_pages: '304 páginas',
    book_status: NaoLido,
    book_img: Capa(1)
  },
  {
    id: 2,
    book_name: 'É assim que acaba',
    book_autor: 'Colleen Hoover',
    book_pages: '368 páginas',
    book_status: NaoLido,
    book_img: Capa(2)
  },
  {
    id: 3,
    book_name: 'É assim que começa',
    book_autor: 'Colleen Hoover',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(3)
  },
  {
    id: 4,
    book_name: 'O lado feio do amor',
    book_autor: 'Colleen Hoover',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(4)
  },
  {
    id: 5,
    book_name: 'Verity',
    book_autor: 'Colleen Hoover',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(5)
  },
  {
    id: 6,
    book_name: 'Até o verão terminar',
    book_autor: 'Colleen Hoover',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(6)
  },
  {
    id: 7,
    book_name: 'Tarde demais',
    book_autor: 'Colleen Hoover',
    book_pages: '384 páginas',
    book_status: NaoLido,
    book_img: Capa(7)
  },
  {
    id: 8,
    book_name: 'Uma segunda chance',
    book_autor: 'Colleen Hoover',
    book_pages: '368 páginas',
    book_status: NaoLido,
    book_img: Capa(8)
  },
  {
    id: 9,
    book_name: 'Um caso perdido',
    book_autor: 'Colleen Hoover',
    book_pages: '384 páginas',
    book_status: NaoLido,
    book_img: Capa(9)
  },
  {
    id: 10,
    book_name: 'Sem esperança',
    book_autor: 'Colleen Hoover',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(10)
  },
  {
    id: 11,
    book_name: 'Em busca de Cinderela e Em busca da perfeição',
    book_autor: 'Colleen Hoover',
    book_pages: '256 páginas',
    book_status: NaoLido,
    book_img: Capa(11)
  },
  {
    id: 12,
    book_name: 'As mil partes do meu coração',
    book_autor: 'Colleen Hoover',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(12)
  },
  {
    id: 13,
    book_name: 'A razão do amor',
    book_autor: 'Ali Hazelwood',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(13)
  },
  {
    id: 14,
    book_name: 'A hipótese do amor',
    book_autor: 'Ali Hazelwood',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(14)
  },
  {
    id: 15,
    book_name: 'Amor, teoricamente',
    book_autor: 'Colleen Hoover',
    book_pages: '368 páginas',
    book_status: NaoLido,
    book_img: Capa(15)
  },
  {
    id: 16,
    book_name: 'O duque e eu',
    book_autor: 'Julia Quinn',
    book_pages: '288 páginas',
    book_status: NaoLido,
    book_img: Capa(16)
  },
  {
    id: 17,
    book_name: 'O visconde que me amava',
    book_autor: 'Julia Quinn',
    book_pages: '288 páginas',
    book_status: NaoLido,
    book_img: Capa(17)
  },
  {
    id: 18,
    book_name: 'Um perfeito cavalheiro',
    book_autor: 'Julia Quinn',
    book_pages: '304 páginas',
    book_status: NaoLido,
    book_img: Capa(18)
  },
  {
    id: 19,
    book_name: 'Os segredos de Colin Bridgerton',
    book_autor: 'Julia Quinn',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(19)
  },
  {
    id: 20,
    book_name: 'Para Sir Phillip, com amor',
    book_autor: 'Julia Quinn',
    book_pages: '276 páginas',
    book_status: NaoLido,
    book_img: Capa(20)
  },
  {
    id: 21,
    book_name: 'O conde enfeitiçado',
    book_autor: 'Julia Quinn',
    book_pages: '304 páginas',
    book_status: NaoLido,
    book_img: Capa(21)
  },
  {
    id: 22,
    book_name: 'O beijo inesquecível',
    book_autor: 'Julia Quinn',
    book_pages: '272 páginas',
    book_status: NaoLido,
    book_img: Capa(22)
  },
  {
    id: 23,
    book_name: 'A caminho do altar',
    book_autor: 'Julia Quinn',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(23)
  },
  {
    id: 24,
    book_name: 'E viveram felizes para sempre',
    book_autor: 'Julia Quinn',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(24)
  },
  {
    id: 25,
    book_name: 'Crônicas da sociedade de Lady Whistledown',
    book_autor: 'Julia Quinn',
    book_pages: '384 páginas',
    book_status: NaoLido,
    book_img: Capa(25)
  },
  {
    id: 26,
    book_name: 'Fallen',
    book_autor: 'Lauren Kate',
    book_pages: '406 páginas',
    book_status: NaoLido,
    book_img: Capa(26)
  },
  {
    id: 27,
    book_name: 'Tormenta',
    book_autor: 'Lauren Kate',
    book_pages: '392 páginas',
    book_status: NaoLido,
    book_img: Capa(27)
  },
  {
    id: 28,
    book_name: 'Paixão',
    book_autor: 'Lauren Kate',
    book_pages: '378 páginas',
    book_status: NaoLido,
    book_img: Capa(28)
  },
  {
    id: 29,
    book_name: 'Êxtase',
    book_autor: 'Lauren Kate',
    book_pages: '350 páginas',
    book_status: NaoLido,
    book_img: Capa(29)
  },
  {
    id: 30,
    book_name: 'Como sobreviver à realeza',
    book_autor: 'Rachel Hawkins',
    book_pages: '312 páginas',
    book_status: NaoLido,
    book_img: Capa(30)
  },
  {
    id: 31,
    book_name: 'Sua alteza real',
    book_autor: 'Rachel Hawkins',
    book_pages: '304 páginas',
    book_status: NaoLido,
    book_img: Capa(31)
  },
  {
    id: 32,
    book_name: 'Eu e esse meu coração',
    book_autor: 'C. C. Hunter',
    book_pages: '424 páginas',
    book_status: NaoLido,
    book_img: Capa(32)
  },
  {
    id: 33,
    book_name: 'Antes que as luzes se apaguem',
    book_autor: 'Jay Asher',
    book_pages: '256 páginas',
    book_status: NaoLido,
    book_img: Capa(33)
  },
  {
    id: 34,
    book_name: 'Imperfeitos',
    book_autor: 'Christina Lauren',
    book_pages: '256 páginas',
    book_status: NaoLido,
    book_img: Capa(34)
  },
  {
    id: 35,
    book_name: 'A biblioteca da meia-noite',
    book_autor: 'Matt Haig',
    book_pages: '200 / 308 páginas',
    book_status: Lendo,
    book_img: Capa(35)
  },
  {
    id: 36,
    book_name: 'Todo esse tempo',
    book_autor: 'Mikki Daughtry e Rachael Lippincott',
    book_pages: '352 páginas',
    book_status: NaoLido,
    book_img: Capa(36)
  },
  {
    id: 37,
    book_name: 'Amêndoas',
    book_autor: 'Won-pyung Sohn',
    book_pages: '288 páginas',
    book_status: NaoLido,
    book_img: Capa(37)
  },
  {
    id: 38,
    book_name: 'Uma tempestade de verão',
    book_autor: 'K. L. Walther',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(38)
  },
  {
    id: 39,
    book_name: 'Uma farsa de amor na Espanha',
    book_autor: 'Elena Armas',
    book_pages: '448 páginas',
    book_status: NaoLido,
    book_img: Capa(39)
  },
  {
    id: 40,
    book_name: 'Amor(es) verdadeiro(s)',
    book_autor: 'Taylor Jenkins Reid',
    book_pages: '296 páginas',
    book_status: NaoLido,
    book_img: Capa(40)
  },
  {
    id: 41,
    book_name: 'Teto para dois',
    book_autor: 'Beth O’Leary',
    book_pages: '400 páginas',
    book_status: NaoLido,
    book_img: Capa(41)
  },
  {
    id: 42,
    book_name: 'Pessoas normais',
    book_autor: 'Sally Rooney',
    book_pages: '264 páginas',
    book_status: NaoLido,
    book_img: Capa(42)
  },
  {
    id: 43,
    book_name: 'Você ligou para o Sam',
    book_autor: 'Dustin Thao',
    book_pages: '336 páginas',
    book_status: NaoLido,
    book_img: Capa(43)
  },
  {
    id: 44,
    book_name: 'O morro dos ventos uivantes',
    book_autor: 'Emily Brontë',
    book_pages: '368 páginas',
    book_status: NaoLido,
    book_img: Capa(44)
  },
  {
    id: 45,
    book_name: 'O clube do livro dos homens',
    book_autor: 'Lyssa Kay Adams',
    book_pages: '320 páginas',
    book_status: NaoLido,
    book_img: Capa(45)
  },
  {
    id: 46,
    book_name: 'O pequeno príncipe',
    book_autor: 'Antoine de Saint-Exupéry',
    book_pages: '96 páginas',
    book_status: NaoLido,
    book_img: Capa(46)
  },
  {
    id: 47,
    book_name: 'Nós estivemos aqui',
    book_autor: 'P. M. Chester',
    book_pages: '15 / 15 páginas',
    book_status: Lido,
    book_img: Capa(47)
  },
]

export const booksReadings = booksDetails.filter(book => book.book_status === Lendo)

export const booksFinisheds = booksDetails.filter(book => book.book_status === Lido)

export const booksUnreads = booksDetails.filter(book => book.book_status === NaoLido)