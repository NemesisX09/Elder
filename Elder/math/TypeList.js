/**
 * Created by NemesisX
 * Pear is meant to act as a deep down way to 
 * find how evaluation functions work.
 */

class Operator{constructor(t){this.value=t,this.type="operator","-"==t?(this.operation="sub",this.order=2):"+"==t?(this.operation="add",this.order=2):"/"==t?(this.operation="div",this.order=1):"*"==t?(this.operation="mult",this.order=1):"^"==t&&(this.operation="pow",this.order=1)}}class Number{constructor(t){this.value=t,this.type="number"}add(t){return this.value=(parseInt(this.value)+parseInt(t.value)).toString(),this}sub(t){return this.value=(parseInt(this.value)-parseInt(t.value)).toString(),this}div(t){return this.value=(parseInt(this.value)/parseInt(t.value)).toString(),this}mult(t){return this.value=(parseInt(this.value)*parseInt(t.value)).toString(),this}pow(t){return this.value=Math.pow(parseInt(this.value),parseInt(t.value)).toString(),this}}module.exports={Operator:Operator,Number:Number};