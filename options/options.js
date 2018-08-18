async function restoreOptions () {
  const res = await browser.storage.local.get('tab-limit')
  document.querySelector("#tab-limit").value = res['tab-limit'] || browser.runtime.getManifest().DEFAULT_TAB_LIMIT
}

async function saveOptions () {
  const newValue = document.querySelector("#tab-limit").value
  await browser.storage.local.set({
    'tab-limit': (!isNaN(newValue) && newValue > 1) ? newValue : browser.runtime.getManifest().DEFAULT_TAB_LIMIT
  })
}

async function backToDefault () {
  await browser.storage.local.remove('tab-limit')
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.getElementById("save-button").addEventListener("click", saveOptions)
document.getElementById("default-button").addEventListener("click", backToDefault)
