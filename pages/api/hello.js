// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    gam1:[
      {url: '2.jpg', name: 'Judul No 1'}
      ],
    gam2:[
      {url: '3.png', name: 'Judul No 2'}
      ],
    gam3:[
      {url: '4.jpg', name: 'Judul No 3'}
      ],
    corona:[
      {url: '1.jpg', name: 'corona'}
    ]
       
  })
}
