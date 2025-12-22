
//windows taskbar apps
document.addEventListener('DOMContentLoaded', () => {
  //as the bomboclatt name suggests
  function closeAll() {
    const searchBtn = document.getElementById('searchBtn');
    const searchBtnIos = document.getElementById('searchBtnIos');
    const search = document.getElementById('search');
    const appIcons = document.querySelectorAll('.win-home');
   
    search?.classList.add('hide');
    searchBtn?.classList.remove('bg-blue-500');
    searchBtn?.classList.add('win-search');

    
    appIcons.forEach((icon, i) => {
      document.getElementById(`app${i}`)?.classList.add('hide');
      icon.classList.remove('bg');
    });
  }

//exit button
  const exitBtns = document.getElementsByClassName("exit");
  for(let i = 0; i < exitBtns.length; i++){
    exitBtns[i].addEventListener('click', () => {
      closeAll();
       document.getElementById('backdrop')?.classList.add('hidden');
    })
  }
  
  //windows search 
  const searchBtn = document.getElementById('searchBtn');
  const search = document.getElementById('search');

  
  searchBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); 
     e.stopPropagation(); 
    const wasHidden = search?.classList.contains('hide');
    closeAll();
    if (wasHidden) {
    search?.classList.remove('hide');
    searchBtn.classList.remove('win-search');
    searchBtn.classList.add('bg-blue-500');
    }
  });


  document.addEventListener('click', (e) => {
    if (!search?.classList.contains('hide')) { 
      if (e.target !== search && e.target !== searchBtn && searchBtn) {
        search?.classList.add('hide');
        searchBtn.classList.remove('bg-blue-500');
        searchBtn.classList.add('win-search');
      }
    }
  });

  search?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  searchBtn?.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    document.getElementById("search-svg")?.classList.remove("scale-[1]");
    document.getElementById("search-svg")?.classList.add("scale-[0.75]");
  });

  searchBtn?.addEventListener("mouseup", (e) => {
    e.stopPropagation();
    document.getElementById("search-svg")?.classList.remove("scale-[0.75]");
    document.getElementById("search-svg")?.classList.add("scale-[1]");
  });

  //other windows icons
 document.querySelectorAll(".win-home").forEach((btn, i) => {
    btn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    document.getElementById(`icon-svg${i}`)?.classList.remove("scale-[1]");
    document.getElementById(`icon-svg${i}`)?.classList.add("scale-[0.75]");
  });

  btn.addEventListener("mouseup", (e) => {
    e.stopPropagation();
    document.getElementById(`icon-svg${i}`)?.classList.remove("scale-[0.75]");
    document.getElementById(`icon-svg${i}`)?.classList.add("scale-[1]");
  });
 });

  const appIcon = document.querySelectorAll('.win-home');

  appIcon.forEach((icon, i) => {
    const app =  document.getElementById(`app${i}`);
    if (app){

    icon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const wasHidden = app.classList.contains('hide'); 
    closeAll();
    if (wasHidden) {
    app.classList.remove('hide');
    icon.classList.add('bg');  
    } else {
    icon.classList.remove('bg'); 
  }
});

    document.addEventListener('click', (e) => {
    if (!app?.classList.contains('hide')) { 
      if (e.target !== app && e.target !== icon && icon) {
        app?.classList.add('hide');
        icon.classList.remove('bg');
      }
    }
  });

  app?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  }
  });
  //ios apps
  const iosIcons = document.querySelectorAll('.icon');
  const backdrop = document.getElementById('backdrop');
  const input = document.getElementById('input');

  iosIcons.forEach((iosIcon, i) => {
    const app =  document.getElementById(`app${i}`);
    if (app){
    iosIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const wasHidden = app.classList.contains('hide'); 
    if (wasHidden) {
    app.classList.remove('hide');
    backdrop?.classList.remove('hidden');  
    } 
    else {
      backdrop?.classList.add('hidden');
      closeAll();
    }
});

    document.addEventListener('click', (e) => {
    if (!app?.classList.contains('hide')) { 
      if (e.target !== app && e.target !== iosIcon && iosIcon) {
        app?.classList.add('hide');
        backdrop?.classList.add('hidden')
      }
    }
  });

  app?.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  backdrop?.addEventListener('click', () => {
    backdrop.classList.add('hidden');
    console.log('clicked')
  })
  }
  });
  //IOS search
  const searchBtnIos = document.getElementById('searchBtnIos');

  
  searchBtnIos?.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const wasHidden = search?.classList.contains('hide');
    closeAll();
    backdrop?.classList.add('hidden');
    if (wasHidden) {
    search?.classList.remove('hide');
    backdrop?.classList.remove('hidden');
    }
  });

  //Logic for opening by search
  const searches = document.getElementsByClassName("s-icons");
 
  for(let i = 0; i < searches.length; i++){
    searches[i].addEventListener('click', (e) => {
      e.stopPropagation();
      if(e.target === searches[i] && !search?.classList.contains('hide')){
        search?.classList.add('hide');
        backdrop?.classList.add('hidden');

        document.querySelector(`.a${i}`)?.classList.remove('hide');
        

      }
    })
  }

  //logic for closing search
  document.addEventListener('click', (e) => {
    if (!search?.classList.contains('hide')) { 
      if (e.target !== search && e.target !== searchBtnIos && searchBtnIos) {
        search?.classList.add('hide');
        backdrop?.classList.add('hidden');
      }

    }
  });


  search?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

});
