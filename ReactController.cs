using System;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class ReactController : MonoBehaviour
{
    public GameObject menu;
    
    // set UI label text
    public void SetText(string text) {
        var root = menu.GetComponent<UIDocument>().rootVisualElement;
        var label = root.Q<Label>("label");
        label.text = text;
    }

    // button clicked
    public void OnButtonClick() {
        // calls function 'ButtonClicked' in React
        UnityEngine.Application.ExternalCall("ButtonClicked");
    }
}
