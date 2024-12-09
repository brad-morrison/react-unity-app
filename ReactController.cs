using System;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class ReactController : MonoBehaviour
{
    public GameObject menu;
    void Start()
    {
        SetText("Tester");
    }

    // set UI label text
    public void SetText(string text) {
        var root = menu.GetComponent<UIDocument>().rootVisualElement;
        Debug.Log(root);
        var label = root.Q<Label>("label");
        label.text = text;
    }

    // button clicked
    public void OnButtonClick() {
        UnityEngine.Application.ExternalCall("ButtonClicked");
    }
}
