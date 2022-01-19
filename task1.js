const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
  alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

function leaveQueueWithoutParcel() {
  let i = peopleWaiting.length;
  while ( i > 0) {
    {
      alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди В очереди осталось ${peopleWaiting.length} человек`);
      i = peopleWaiting.length;
    }
  }
}

giveParcel();
giveParcel();
giveParcel();
leaveQueueWithoutParcel();