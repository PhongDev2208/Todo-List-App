import html from "../core.js";
import { connect } from "../store.js";

function ListItem({todo,index,editIndex}) {
    return html`
    <li class="${todo.complete && 'completed'} ${editIndex === index && 'editing'}">
    <div class="view">
      <input class="toggle" type="checkbox" ${todo.complete && 'checked'} onchange="dispatch('TOGGLE',${index})"/>
      <label ondblclick="dispatch('START_EDIT',${index})">${todo.title}</label>
      <button class="destroy" onclick="dispatch('DESTROY',${index})"></button>
    </div>
    <input 
    onblur="dispatch('END_EDIT',this.value.trim())" 
    onkeyup="event.keyCode === 13 && dispatch('END_EDIT',this.value.trim()) || event.keyCode === 27 && dispatch('CANCEL_EDIT')" 
    class="edit" 
    value="${todo.title}" />
  </li>
    `
}

export default connect()(ListItem)