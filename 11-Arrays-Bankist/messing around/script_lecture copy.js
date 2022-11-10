'use strict';
function searchBar(x, y, z = x) {
  let input, filter, table, tr, td, i, txtValue;

  input = document.getElementById(`searchInput${z}`);
  filter = input.value.toUpperCase();

  table = document.getElementById(`searchTable${x}`);

  tr = table.getElementsByTagName('tr');
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[y];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
function getFile() {
  document.getElementById('btn-input').click();
}

function sub(obj) {
  const file = obj.value;
  const fileName = file.split('\\');
  document.getElementById('btn-upload').innerHTML =
    fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-bar');
const bodyEl = document.querySelector('body');

const openNav = function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
};
const closeNav = function () {
  burger.classList.remove('active');
  nav.classList.remove('active');
};
burger.addEventListener('click', openNav);
nav.addEventListener('click', closeNav);
bodyEl.addEventListener('touch', closeNav);

document
  .querySelectorAll('.nav-bar')
  .forEach(n => n.addEventListener('click', closeNav));
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !nav.classList.contains('active')) {
    closeNav();
  }
});

function delete_task(id) {
  const x = confirm('Czy na pewno usunąć zadanie?');
  if (x) {
    location.href = `/delete-task/${id}`;
  }
}

function finish_task(id) {
  const x = confirm('Czy na pewno zakończyć zadanie?');
  if (x) {
    location.href = `/finish-task/${id}`;
  }
}
function odpowiedzialni_task(id) {
  const y = confirm('Czy na pewno przyjać zadanie?');
  if (y) {
    location.href = `/take-task/${id}`;
  }
}
// document.querySelector("#default").addEventListener("click", openCity);

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById('pTable');
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}
function EnableTableColumnSorting() {
  // A comparer that checks first if the cell values are numbers,
  // else does a lexicographical compare.
  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      GetCellValueForSorting(asc ? a : b, idx),
      GetCellValueForSorting(asc ? b : a, idx)
    );

  // NOTE: Using querySelectorAll('table.sortable th'), only tables with
  // the 'sortable' class are be affected. Use ('table.sortable th') for
  // all tables.
  document.querySelectorAll('table.sortable > * > tr > th').forEach(th =>
    th.addEventListener('click', () => {
      const table = th.closest('table');
      const rows = table.querySelectorAll('tr:nth-child(n+2)');
      // Filter out cells that are from nested tables:
      let immediateRows = [];
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        if (row.closest('table') == table) {
          immediateRows.push(row);
        }
      }
      Array.from(immediateRows)
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach(tr => table.appendChild(tr));
    })
  );
}

function GetCellValueForSorting(tr, idx) {
  let cell = tr.children[idx];
  if (!cell) {
    return '0';
  }
  let sortValue = cell.getAttribute('data-sort-value');
  if (sortValue) {
    return sortValue;
  }
  let text = cell.innerText || cell.textContent;
  if (text) {
    return text;
  }
  return cell.innerHTML;
}
function highPriority() {
  document.querySelector();
}
const navHeader = document.querySelector('#header');
navHeader.addEventListener('click', () => {
  console.log(`hi`);
});
