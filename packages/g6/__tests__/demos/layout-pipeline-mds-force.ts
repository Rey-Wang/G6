import { Graph } from '@antv/g6';

export const layoutPipelineMdsForce: TestCase = async (context) => {
  const data = {
    nodes: [
      { id: '2023022111330994' },
      { id: '2023022131662846' },
      { id: '2023022134006229' },
      { id: '2023022134355387' },
      { id: '2023022134649283' },
      { id: '2023022135378377' },
      { id: '2023022159807939' },
      { id: '2023022171679817' },
      { id: '2023022192941079' },
      { id: '2023032121629632' },
      { id: '2023032149712027' },
      { id: '2023032171523093' },
      { id: '2023032439702273' },
      { id: '2023053113971286' },
      { id: '2023062814858004' },
      { id: '2023083116793312' },
      { id: '2023083116798008' },
      { id: '2023083116802328' },
      { id: '2023083116802329' },
      { id: '2023092717337264' },
      { id: '2022042607099685' },
      { id: '2023022115050705' },
      { id: '2023022124015954' },
      { id: '2023022160748942' },
      { id: '2023022176798458' },
      { id: '2023022183981042' },
      { id: '2023032138615654' },
      { id: '2023033152992057' },
      { id: '2023062614749332' },
      { id: '2023083016776599' },
      { id: '2023083116802327' },
      { id: '2023090716992598' },
      { id: '2023112718364754' },
      { id: '2023112918428536' },
      { id: '10' },
      { id: '11' },
      { id: '13' },
    ],
    edges: [
      { source: '2023032149712027', target: '2022042607099685', id: 2024030419919960 },
      { source: '2023033152992057', target: '2023022124015954', id: 2024030419923397 },
      { source: '2023092717337264', target: '2022042607099685', id: 2024022919878863 },
      { source: '2023092717337264', target: '2023033152992057', id: 2024022919878864 },
      { source: '2023092717337264', target: '2023022135378377', id: 2024022919878865 },
      { source: '2023022159807939', target: '2023022183981042', id: 2023022171425708 },
      { source: '2023022183981042', target: '2023022159807939', id: 2024022919872476 },
      { source: '2023022171679817', target: '2023083016776599', id: 2024013019576232 },
      { source: '2023083116802327', target: '2023032149712027', id: 2023102317587829 },
      { source: '2023083116802327', target: '2023092717337264', id: 2023092717340047 },
      { source: '2023083116802328', target: '2023092717337264', id: 2023092717340048 },
      { source: '2023083116802329', target: '2023092717337264', id: 2023092717340049 },
      { source: '2023092717337264', target: '2022042607099685', id: 2023092717337342 },
      { source: '2023053113971286', target: '2023053113971286', id: 2023071415272433 },
      { source: '2023062814858004', target: '2023062814858004', id: 2023062814858057 },
      { source: '2023062614749332', target: '2023062614749332', id: 2023062614749380 },
      { source: '2023022159807939', target: '2023053113971286', id: 2023053113971328 },
      { source: '2023053113971286', target: '2023053113971286', id: 2023053113971329 },
      { source: '2023032171523093', target: '2023032171523093', id: 2023032188641552 },
      { source: '2023032138615654', target: '2023032138615654', id: 2023032163869608 },
      { source: '2023032439702273', target: '2023032439702273', id: 2023032461304126 },
      { source: '2023033152992057', target: '2023032149712027', id: 2023033129305007 },
      { source: '2023033152992057', target: '2023022134006229', id: 2023040438213028 },
      { source: '2023032121629632', target: '2023032121629632', id: 2023032184876493 },
      { source: '2023022124015954', target: '2023032149712027', id: 2023041947056477 },
      { source: '2023022134006229', target: '2023022192941079', id: 2023022160953640 },
      { source: '2023033152992057', target: '2023022124015954', id: 2023041466404158 },
      { source: '2023022192941079', target: '2023032149712027', id: 2023032412723482 },
      { source: '2023022124015954', target: '2023022131662846', id: 2023041985653086 },
      { source: '2023032149712027', target: '2023032149712027', id: 2023032177181441 },
      { source: '2023022134006229', target: '2023022135378377', id: 2023022191267699 },
      { source: '2023022134006229', target: '2023022115050705', id: 2023022113765807 },
      { source: '2022042607099685', target: '2022042607099685', id: 2022042607099906 },
      { source: '2023022192941079', target: '13', id: 1000 },
      { source: '2023083116802329', target: '10', id: 1001 },
      { source: '2023022124015954', target: '11', id: 1002 },
      { source: '2023033152992057', target: '10', id: 1003 },
    ],
  };

  const graph = new Graph({
    ...context,
    data,
    layout: [
      { type: 'mds', animation: false },
      {
        type: 'force',
        animation: false,
        preventOverlap: true,
        nodeSize: 32,
        maxSpeed: 500,
        leafCluster: true,
        clustering: false,
        clusterNodeStrength: 35,
        minMovement: 1.5,
        nodeClusterBy: 'cluster',
      },
    ],
    autoFit: 'view',
  });
  await graph.render();

  return graph;
};