const wrapper = document.querySelector(".wrapper"),
editableInput = wrapper.querySelector(".editable"),
readonlyInput = wrapper.querySelector(".readonly"),
placeholder = wrapper.querySelector(".placeholder"),
counter = wrapper.querySelector(".postCounter"),
button = wrapper.querySelector("button");

editableInput.onfocus = ()=>{
  placeholder.style.color = "#c5ccd3";
}
editableInput.onblur = ()=>{
  placeholder.style.color = "#98a5b1";
}
editableInput.onkeyup = (e)=>{
  if (checkKey()) {
    let element = e.target;
    validated(element);
  }
}
editableInput.onkeypress = (e)=>{
  if (checkKey()) {
    let element = e.target;
    validated(element);
    placeholder.style.display = "none";
  }
}
editableInput.addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});

function checkKey(e) {

  e = window.event;

  if (e.keyCode === '38') {
    return false;
  }
  else if (e.keyCode === '40') {
    return false;
  }
  else if (e.keyCode === '37') {
    return false;
  }
  else if (e.keyCode === '39') {
    return false;
  }
  else if (e.keyCode === '13') {
    return false;
  }

  return true;
}

document.querySelector(".inputURI").addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});
document.querySelector(".inputHashtag").addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});
document.querySelector(".inputTags").addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});
document.querySelector(".inputTips").addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});
document.querySelector(".inputGroups").addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});


async function validated(element){

  let text;
  let maxLength = 420;
  let currentlength = element.innerText.length;

  if (isGroupSelected){
    maxLength = 10000;
  }

  if(currentlength <= 0){
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  }else{
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  counter.innerText = maxLength - currentlength;

  if(currentlength > maxLength){
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  }else{
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#aab8c2";
    text = element.innerText;
  }

  readonlyInput.innerHTML = text; //replacing innerHTML of readonly div with textTag value

  let hashtags = [];
  let tagged = [];
  let groups = [];

  let inputText = $('.readonly').html();

  // Get all Hashtags (regex match including unicode)
  hashtags = inputText.match(/#[\p{L}0-9]+/ugi);

  // Get all Tagged Accounts
  tagged = inputText.match(/@[\p{L}0-9]+/ugi);
  // TODO: for ENS Resolving
  // tagged = inputText.match(/@[\p{L}0-9{.eth}]+/ugi);

  // Get all Groups
  groups = inputText.match(/%[\p{L}0-9]+/ugi);

  if (hashtags && hashtags.length > 0) {
    for (let i = 0; i < hashtags.length; i++) {
      inputText = inputText.replace(hashtags[i], '<span class="postHashtag">' + hashtags[i] + '</span>');
    }
    $('#hashtags').val(hashtags.toString().replaceAll('#',''));

    $('.placeholderHashtag').hide();
    $('.inputHashtag').html($('#hashtags').val()).show();
  } else {
    $('#hashtags').val('');
    $('.placeholderHashtag').show();
    $('.inputHashtag').html($('#hashtags').val()).hide();
  }

  if (tagged && tagged.length > 0) {
    let resolvedAddresses = '';
    for (let i = 0; i < tagged.length; i++) {
      // if (tagged[i].length > 1){
      //   console.log("Looking up: ", tagged[i]);
      //   let userAddress = await contractHandles.methods.usrHandleMap(tagged[i].toLowerCase().replace('@','')).call()
      //       .then(result => {
      //         if (result != nullAddress) {
      //           console.log('Got User Address of: ', result);
      //           tagged[i] = '@' + result;
      //           return result;
      //         } else {
      //           console.log('Got User Address of: ', result);
      //         }
      //       })
      //       .catch(err => {
      //         catchError('getMsgIDs-groups', err);
      //       });
      // }
      // TODO: FIX ENS Resolving
      // if (tagged[i].length - tagged[i].toLowerCase().indexOf('.eth') === 4 && tagged[i].toLowerCase().indexOf('.eth') > 0){
      //   let ensResolvedAddress = await web3ETH.eth.ens.getResolver(tagged[i].replaceAll('@','')).then(function (contract) {
      //     console.log(contract);
      //     return contract._address;
      //   });
      //   if (ensResolvedAddress != '0x00000'){
      //     if (resolvedAddresses.length > 0){
      //       resolvedAddresses += ',' + ensResolvedAddress;
      //     } else {
      //       resolvedAddresses = ensResolvedAddress;
      //     }
      //   }
      // } else {
        if (resolvedAddresses.length > 0){
          resolvedAddresses += ',' + tagged[i];
        } else {
          resolvedAddresses = tagged[i];
        }
      // }
      inputText = inputText.replace(tagged[i], '<span class="postTagged">' + tagged[i] + '</span>');
    }
    $('#tags').val(resolvedAddresses.replaceAll('@',''));

    $('.placeholderTags').hide();
    $('.inputTags').html($('#tags').val()).show();
  } else {
    $('#tags').val('');
    $('.placeholderTags').show();
    $('.inputTags').html($('#tags').val()).hide();
  }

  if (groups && groups.length > 0) {
    for (let i = 0; i < groups.length; i++) {
      inputText = inputText.replace(groups[i], '<span class="postGroup">' + groups[i] + '</span>');
    }
    $('#inGroups').val(groups.toString().replaceAll('%',''));

    $('.placeholderGroups').hide();
    $('.inputGroups').html($('#inGroups').val()).show();
  } else {
    $('#inGroups').val('');
    $('.placeholderGroups').show();
    $('.inputGroups').html($('#inGroups').val()).hide();
  }

  $('.editable').html(inputText);

  setEndOfContenteditable(editableInput);
}

function setEndOfContenteditable(contentEditableElement)
{
  let range,selection;
  if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
  {
    range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
  }
  else if(document.selection)//IE 8 and lower
  {
    range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
    range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    range.select();//Select the range (make it the visible selection
  }
}
