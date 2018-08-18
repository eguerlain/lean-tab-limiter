const reactToNewTab = async tab => {
  const tabs = await browser.tabs.query({})
  const res = await browser.storage.local.get('tab-limit')
  const limit = res['tab-limit'] || browser.runtime.getManifest().DEFAULT_TAB_LIMIT
  if (tabs.length > limit) await browser.tabs.remove(tab.id)
}

browser.tabs.onCreated.addListener(reactToNewTab)
