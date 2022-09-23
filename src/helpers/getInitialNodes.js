export default () => {
  return [
    {
      id: 'IntroPage',
      //type: 'group',
      type: 'standardpage',
      data: { label: 'Introduction page', id:'IntroPage' },
      position: { x: 0, y: 0 },
      // style: { width: 170, height: 140 },
      connectable: false,
      //draggable: false,
      sourcePosition: 'right',
      targetPosition: 'left'
    },
    // {
    //   id: 'Textbox1',
    //   type: 'input',
    //   //type: 'group',
    //   data: { label: 'My textbox' },
    //   position: { x: 10, y: 50 },
    //   draggable: false,
    //   parentNode: 'IntroPage',
    //   //expandParent: true,
    //   extent: 'parent'
    // },
    {
      id: 'SummaryPage',
      //type: 'group',
      // type: 'output',
      type: 'standardpage',
      data: { label: 'Summary page', id:'SummaryPage' },
      position: { x: 400, y: 0 },
      // style: { width: 170, height: 140 },
      connectable: false,
      //draggable: false,
      sourcePosition: 'right',
      targetPosition: 'left'
    },
  ];
}