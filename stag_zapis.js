// 1. search for "stplidno" value (plan/program)
const studijniProgramy = [];
const studijniProgramyNodes = document.querySelectorAll('[stplidno]');

for(let node of studijniProgramyNodes) {
    const labelElement = node.querySelector('.gpv-strom-segmentHead > form > label');
    studijniProgramy.push({
        title: labelElement?.textContent?.trim() ?? 'invalid',
        planId: node.getAttribute('stplidno') ?? ''
    })
}

// 2. zjistit typ semestru (LS / ZS)
const zsInputEl = document.getElementById('semestrZS');

const isZS = zsInputEl?.checked ?? false;


// 3. modify popup tooltip
const subjects = document.querySelectorAll('.gpv-pred');
for(let i = 0; i < subjects.length; i++) {
    const subjectEl = subjects[i];

    subjectEl.addEventListener('click', () => {
        // get popup
        const popupId = subjectEl.getAttribute('aria-describedby') ?? `ui-tooltip-${i + 1}`;
        const popupEl = document.getElementById(popupId);
        if(!popupEl) return;
        // add add-subject button
        modifyPopup(popupEl, subjectEl);
        
    })
}

function modifyPopup(popupEl, subjectEl) {
    const popupContentEl = popupEl.querySelector('.gpv-bublina-coat .gpv-bublina-content > div');
    if(!popupContentEl) return;

    const subjectInfo = getSubjectInfo(popupEl) ?? getSubjectInfoAlt(subjectEl);
    if(!subjectInfo) return;

    const buttons = studijniProgramy.map(prog => {
        const btn = document.createElement('input');
        btn.value = `vybrat ${subjectInfo.katedra}/${subjectInfo.predmet} k zápisu (${prog.title})`;
        btn.type = 'button';
        btn.onclick = () => window.vybratPredmet(
            {
                katedra: subjectInfo.katedra,
                predmet: subjectInfo.predmet,
                sa: subjectInfo.statut,
                pa: prog.planId
            },
            isZS ? 'ZS' : 'LS'
        );

        return btn;
    });

    popupContentEl.append(...buttons)
}

/*  sa / statut:
    A = volitelné
    B = povinně volitelné
    C = volitelné */

function getSubjectInfo(popupEl) {
    const sylabusBtn = popupEl.querySelector('input[value=Sylabus]');
    if(!sylabusBtn) return null;

    return {
        katedra: sylabusBtn.getAttribute('katedra'),
        predmet: sylabusBtn.getAttribute('predmet'),
        statut: sylabusBtn.getAttribute('statut')
    }
}

function getSubjectInfoAlt(subjectEl) {
    const titleEl = subjectEl.querySelector('[title]') ??
                    subjectEl.querySelector('div:nth-child(3)');
    const title = titleEl?.textContent?.trim();
    const className = subjectEl.className;
    const statut = className.match('typ-([ABCDEF])')?.[1] ?? 'A';
    if(!title) return null;

    return {
        katedra: title.split('/')[0],
        predmet: title.split('/')[1],
        statut: statut
    }
}