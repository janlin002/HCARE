const type = [
  {
    id: '沙發/椅子/桌子',
    product: [
      {
        name: '歐美時尚枕頭套組',
        image:
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 1000,
        modal: 'z1365', //型號
        stock: 20,
        info: '乾淨，易洗',
      },
      {
        name: '時尚檯燈組',
        image:
          'https://images.unsplash.com/photo-1504194008492-c55ffe34e18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 300,
        modal: 'x1063',
        stock: 3,
        info: '純白設計, 乾淨簡潔'
      },
      {
        name: '仿牛皮地毯',
        image:
          'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 2500,
        modal: 'd230w',
        stock: 1,
        info: '跟真的牛皮一樣'
      },
      {
        name: '灰白沙發組',
        image:
          'https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 2000,
        modal: 'r345x',
        stock: 4,
        info: '灰白低調,卻不失美感'
      },
    ],
  },
  {
    id: '盆栽/植物',
    product: [
      {
        name: '藍盆植物',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
        price: 500,
        modal: 'br002',
        stock: 30,
        info: '藍盆植物'
      },
      {
        name: '仙人掌',
        image:
          'https://images.unsplash.com/photo-1615870728187-3efca163c649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 350,
        modal:'slg43',
        stock:23,
        info: '仙人掌'
      },
      {
        name: '盆栽組',
        image:
          'https://images.unsplash.com/photo-1518552536705-8b7ef534301f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 200,
        modal: 'pzz032',
        stock: 23,
        info: '由店家隨機挑選,多了一點刺激感'
      },
      {
        name: '藤蔓型盆栽',
        image:
          'https://images.unsplash.com/photo-1589915861928-c69963f2f201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 150,
        modal: 'tmz342',
        stock: 34,
        info: '放在房間剛好,不佔空間'
      },
    ],
  },
  {
    id: '廚房用品',
    product: [
      {
        name: '陶瓷杯',
        image:
          'https://images.unsplash.com/photo-1495100497150-fe209c585f50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 100,
        modal: 'tzb023',
        stock: 120,
        info:'手工陶瓷杯,物美價廉'
      },
      {
        name: '金湯匙',
        image:
          'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 50,
        modal: 'gtz430',
        stock: 342,
        info: '高調，實用'
      },
      {
        name: '調味料盤組',
        image:
          'https://images.unsplash.com/photo-1619367302315-0ed8a8879656?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1063&q=80',
        price: 140,
        modal: 'twlpz12',
        stock: 23,
        info: '純白配色'
      },
      {
        name: '茶杯組',
        image:
          'https://images.unsplash.com/photo-1596367264376-c10f44e8314d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 280,
        modal: 'tbz3043',
        stock: 323,
        info: '高貴優雅'
      },
      {
        name: '日式茶杯組',
        image:
          'https://images.unsplash.com/photo-1531819107804-b7cf36de8a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 200,
        modal: 'jstbz32',
        stock: 423,
        info: '日本進口，品質保證'
      },
    ],
  },
];

export default type;
