import data from "../data/Data.json" assert { type: "json" };

// Dom
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log(data.navPills);
// console.log(data.tabPanes);

// render nav-item
function renderNavItem(listNavItem) {
    let content = listNavItem.map((navItem) => {
        return `
        <li class="nav-item">
        <a
            class="nav-link"
            id="${navItem.tabName}"
            data-toggle="pill"
            href=""
            role="tab"
            aria-selected="false"
            onclick="renderTabPanes('${navItem.type}')"
            >
            ${navItem.showName}
            </a>
        </li>`;
    });

    $("#pills-tab").innerHTML = content.join("");
    $("#pills-tab .nav-item:first-child .nav-link").classList.add("active");
}

renderNavItem(data.navPills);

// render tab panes
function renderTabPanes(type) {
    const filterList = data.tabPanes.filter((tabPane) => type === tabPane.type);
    let content = filterList.map((tabPane) => {
        return `
        <div class="col-6 col-lg-4 col-xl-3">
        <div class="card">
            <img
                class="card-img-top"
                src="${tabPane.imgSrc_jpg}"
                alt=""
            />
            <div class="card-body">
                <h4 class="card-title text-center">
                    ${tabPane.name}
                </h4>
                <button class="btn btn-success w-100" onclick="tryItem('${tabPane.id}')">
                    Thử đồ
                </button>
            </div>
        </div>
    </div>
        `;
    });
    $("#pills-tabContent").innerHTML = content.join("");
}
// render topclothes khi load trang
renderTabPanes("topclothes");

window.renderTabPanes = renderTabPanes;

// tryItem
function tryItem(id) {
    const item = data.tabPanes.find((pane) => id === pane.id);
    console.log(item);

    switch (item.type) {
        case "background":
            $(
                ".background"
            ).style.backgroundImage = `url('${item.imgSrc_png}')`;
            break;
        case "hairstyle":
            $(".hairstyle").style.backgroundImage = `url('${item.imgSrc_png}')`;
            break;
        case "necklaces":
            $(".necklace").innerHTML = `
            <img src="${item.imgSrc_png}" alt="" />
            `;
            break;
        case "handbags":
            $(".handbag").innerHTML = `
            <img src="${item.imgSrc_png}" alt="" />
            `;
            break;
        case "shoes":
            $(".feet").style.backgroundImage = `url('${item.imgSrc_png}')`;
            break;
        case "topclothes":
            $(".topClothes").innerHTML = `
            <img src="${item.imgSrc_png}" alt="" />
            `;
            break;

        case "botclothes":
            $(".botClothes").innerHTML = `
            <img src="${item.imgSrc_png}" alt="" />
            `;
            break;
        default:
            break;
    }
}

window.tryItem = tryItem;
