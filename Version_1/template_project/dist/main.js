(()=>{"use strict";const t=class{constructor(t,s,e){this.Root=s,this.Address=t,this.Name="",this.children=[],this.html_result="",this.Init(e)}Render_Element(t){this.html_result=this.Render(t)}Remove_Children_With_Name(t){this.children.forEach(((s,e)=>{(s.name=t)&&this.children.splice(e,1)}))}Init(){}Create_Child(t,s={}){this.children.push(new t(this.address+this.children.length.toString(),this.Root,s))}Wrap_result_inside_id(t){return`div id = 'LightJS_ID:${this.address}'>${t}</div>`}Render(t){}Invoke_Rerender(){this.Root.rerender(address)}};class s extends t{Set_root(t){this.Root=t}Init(t){this.name="ROOT",this.Create_Child(t._app_class)}Render(){return this.children[0].Render_Element(),`\n            <div>${this.children[0].html_result}</div>\n        `}}class e extends t{Init(){}Render(t){let s=t.tasks,e="";return s.forEach((t=>{e+=`<div class = 'display_flex'><input value = '${t}'></input></div>`})),`<div class = 'display_block'>${e}</div>`}}class i extends t{Init(t){this.add_task_callback=t.add_button,this.add_button_id="add_button",this.remove_task_callback=t.remove_button,this.remove_btn_id="remove_button"}Render(){return this.Root.Add_Effect((()=>{document.getElementById(this.add_button_id).addEventListener("click",(()=>{this.add_task_callback()}))})),this.Root.Add_Effect((()=>{document.getElementById(this.remove_btn_id).addEventListener("click",(()=>{this.remove_task_callback()}))})),`<div class = 'display_flex'>\n                        <div class = 'display_flex' style = 'width : 50%;'>\n\n                           <div class = 'btn' id ='${this.add_button_id}'>Add task</div>\n\n                        </div><div class = 'display_flex' style = 'width : 50%;'>\n\n                           <div class = 'btn' id = '${this.remove_btn_id}'>Remove task</div>\n\n                        </div>\n                    </div>`}}new class{constructor(t){this.effects=[],this.virtualDom=new s("",this,{_app_class:t}),this.Render()}Add_Effect(t){this.effects.push(t)}Run_Effects(){this.effects.forEach((t=>{t()})),this.effects=[]}Render(){this.virtualDom.Render_Element(),document.body.innerHTML=this.virtualDom.html_result,this.Run_Effects()}}(class extends t{Init(){this.tasks_data=[],this.Create_Child(e,{tasks:this.tasks_data}),this.Create_Child(i,{add_button:()=>{this.add_task()},remove_button:()=>{this.remove_task()}})}Render(){return this.children[0].Render_Element({tasks:this.tasks_data}),this.children[1].Render_Element(),`<div class = 'main_container' >\n                    <div class = 'display_flex' style = 'width : 100%;'>\n                       <h2>Tasks</h2>\n                    </div>\n                    <div>\n                       ${this.children[0].html_result}</div> \n                    <div>\n                       ${this.children[1].html_result}</div> \n                    </div>`}add_task(){this.tasks_data.push(""),this.Root.Render()}remove_task(){this.tasks_data.splice(this.tasks_data.length-1,1),this.Root.Render()}})})();